import * as UI from "./modules/ui.js";
import * as Poke from "./modules/pokemon.js";

const RS_ID_SEARCH_MAX = 50000;
const RS_TREND_SEARCH_MAX = 5;
const E_TREND_SEARCH_MAX = 1000;
let searching=false;

async function startSearchCB(){
	if(searching){
		return;
	}
	searching=true;
	const gameVersion=UI.getGameVersion();
	const searchMethod=UI.getSearchMethod();
	const [trend1,trend2]=UI.getTrends();
	const vblank=UI.getSearchVBlankCount();
	if(gameVersion=="RS"){
		UI.updateResultTableHead(["←","ID消費f","TID","SID","流行語待機f","流行語1","流行語2","釣り乱数","IDくじ"]);
		UI.initResultTableBody();
		const tid=UI.getTID();
		const seed=UI.getSeed();
		const rand=new Poke.GPRNG(seed);
		if(searchMethod=="fromTIDTrend"){
			for(let i=0;i<RS_ID_SEARCH_MAX;i++){	//乱数シード値初期化からRS_ID_SEARCH_MAX個の乱数を探索する
				const sid_temp=rand.next();	//裏ID生成
				const rand_tmp=new Poke.GPRNG(rand.seed);
				const tid_temp=rand_tmp.next();
				if(tid==tid_temp){	//表IDが指定したものと一致するなら流行語生成チェックに入る
					const results=await Poke.searchByTrends(rand_tmp.seed,trend1,trend2,RS_TREND_SEARCH_MAX);	//裏ID決定からRS_TREND_SEARCH_MAX個以内の乱数のうち、指定した流行語になる乱数を探す
					results.forEach(result=>{
						UI.updateResultTableBody([null,i,tid,sid_temp,result[0],Poke.getTrendWordById(result[1].words[0]),Poke.getTrendWordById(result[1].words[1]),result[1].fishSeed.toString(16).padStart(4,"0"),result[2]],
							()=>{
								const points=Poke.getFishingPointByTrend(result[1]);
								UI.plotFishingPoint(points);
							});
					});
				}
			}
		}else if(searchMethod=="fromTID"){
			for(let i=0;i<RS_ID_SEARCH_MAX;i++){	//乱数シード値初期化からRS_ID_SEARCH_MAX個の乱数を探索する
				const sid_temp=rand.next();	//裏ID生成
				const rand_tmp=new Poke.GPRNG(rand.seed);
				const tid_temp=rand_tmp.next();
				if(tid==tid_temp){	//表IDが指定したものと一致するなら流行語生成チェックに入る
					const results=(await Poke.searchSimple(rand_tmp.seed,vblank,vblank+1)).filter(result=>result[0]==vblank);	//裏ID決定から指定個以内の乱数
					results.forEach(result=>{
						UI.updateResultTableBody([null,i,tid,sid_temp,result[0],Poke.getTrendWordById(result[1].words[0]),Poke.getTrendWordById(result[1].words[1]),result[1].fishSeed.toString(16).padStart(4,"0"),result[2]],
							()=>{
								const points=Poke.getFishingPointByTrend(result[1]);
								UI.plotFishingPoint(points);
							});
					});
				}
			}
		}else if(searchMethod=="fromPoint"){
			const searchPoint=UI.getSearchPoint();
			let seeds=new Array(0x10000);
			for(let seed=0;seed<0x10000;seed++){
				seeds[seed]=false;
				const points=new Poke.FishRNG(seed).getFishPosIndex();
				if(points.includes(searchPoint)){
					seeds[seed]=true;
				}
			}
			for(let i=0;i<RS_ID_SEARCH_MAX;i++){	//乱数シード値初期化からRS_ID_SEARCH_MAX個の乱数を探索する
				const sid_temp=rand.next();	//裏ID生成
				const rand_tmp=new Poke.GPRNG(rand.seed);
				const tid_temp=rand_tmp.next();
				const result=(await Poke.searchSimple(rand_tmp.seed,vblank,vblank+1)).filter(result=>result[0]==vblank)[0];
				if(seeds[result[1].fishSeed]){
					UI.updateResultTableBody([null,i,tid_temp,sid_temp,result[0],Poke.getTrendWordById(result[1].words[0]),Poke.getTrendWordById(result[1].words[1]),result[1].fishSeed.toString(16).padStart(4,"0"),result[2]],
						()=>{
							const points=Poke.getFishingPointByTrend(result[1]);
							UI.plotFishingPoint(points);
						});
				}
			}
		}
	}else if(gameVersion=="E"){
		UI.updateResultTableHead(["←","TID(seed)","推定SID","流行語待機f","流行語1","流行語2","釣り乱数","IDくじ"]);
		UI.initResultTableBody();
		const tidseed=UI.getTID();	//表IDがそのまま初期シードになる
		if(searchMethod=="fromTIDTrend"){
			const results=await Poke.searchByTrends(tidseed,trend1,trend2,E_TREND_SEARCH_MAX);	//表ID決定からE_TREND_SEARCH_MAX個以内の乱数のうち、指定した流行語になる乱数を探す
			results.forEach(result=>{
				const sidrand=new Poke.GPRNG(tidseed);
				const cnt=result[0]-(1+vblank);//裏ID生成の1個+VBlankフレーム数
				for(let i=0;i<cnt;i++){
					sidrand.next();
				}
				UI.updateResultTableBody([null,tidseed,sidrand.next(),result[0],Poke.getTrendWordById(result[1].words[0]),Poke.getTrendWordById(result[1].words[1]),result[1].fishSeed.toString(16).padStart(4,"0"),result[2]],
					()=>{
						const points=Poke.getFishingPointByTrend(result[1]);
						UI.plotFishingPoint(points);
					});
			});
		}else if(searchMethod=="fromTID"){
			const results=await Poke.searchSimple(tidseed,500,E_TREND_SEARCH_MAX);
			results.forEach(result=>{
				const sidrand=new Poke.GPRNG(tidseed);
				const cnt=result[0]-(1+vblank);//裏ID生成の1個+VBlankフレーム数
				for(let i=0;i<cnt;i++){
					sidrand.next();
				}
				UI.updateResultTableBody([null,tidseed,sidrand.next(),result[0],Poke.getTrendWordById(result[1].words[0]),Poke.getTrendWordById(result[1].words[1]),result[1].fishSeed.toString(16).padStart(4,"0"),result[2]],
					()=>{
						const points=Poke.getFishingPointByTrend(result[1]);
						UI.plotFishingPoint(points);
					});
			});
		}else if(searchMethod=="fromPoint"){
			const searchPoint=UI.getSearchPoint();
			let seeds=new Array(0x10000);
			for(let seed=0;seed<0x10000;seed++){
				seeds[seed]=false;
				const points=new Poke.FishRNG(seed).getFishPosIndex();
				if(points.includes(searchPoint)){
					seeds[seed]=true;
				}
			}
			const results=await Poke.searchSimple(tidseed,500,E_TREND_SEARCH_MAX);
			results.forEach(result=>{
				if(seeds[result[1].fishSeed]){
					const sidrand=new Poke.GPRNG(tidseed);
					const cnt=result[0]-(1+vblank);//裏ID生成の1個+VBlankフレーム数
					for(let i=0;i<cnt;i++){
						sidrand.next();
					}
					UI.updateResultTableBody([null,tidseed,sidrand.next(),result[0],Poke.getTrendWordById(result[1].words[0]),Poke.getTrendWordById(result[1].words[1]),result[1].fishSeed.toString(16).padStart(4,"0"),result[2]],
						()=>{
							const points=Poke.getFishingPointByTrend(result[1]);
							UI.plotFishingPoint(points);
						});
				}
			});
		}
	}
	searching=false;
}

window.addEventListener("DOMContentLoaded",()=>{
	UI.UIInit(startSearchCB);
});
