
const TrendWords={
	"じょうたい":["あつい","あった","あまり",
		"あり","ある","いい",
		"いか","いきおい","いける",
		"いじょう","いそがしい","いっしょに",
		"いっぱい","いない","いや",
		"いる","うまい","うまく",
		"うるさい","おおきい","おくれ",
		"おしい","おとなしい","おもしろい",
		"おもしろく","かんぺき","けっこう",
		"げんき","さいこう","さかさま",
		"さむい","さわやか","しかたない",
		"すごい","すごすぎ","すてき",
		"たいした","たかい","ただしい",
		"だめ","ちいさい","ちがう",
		"つかれ","とくい","トップ",
		"とまらない","とんでもない","ない",
		"なかった","なし","なって",
		"ぬるい","はやい","ひくい",
		"ひどい","ひとりで","ひま",
		"ひみつ","ふしぎ","ふそく",
		"ベスト","へた","まちがって",
		"やさしい","よく","よわって",
		"らく","らしい","わるい"],
	"せいかつ":["アルバイト","うち","おかね",
		"おこづかい","おふろ","かいわ",
		"がっこう","きねん","くせ",
		"グループ","ことば","コンビニ",
		"サービス","しごと","システム",
		"しゅぎょう","じゅぎょう","じゅく",
		"じょうほう","せいかつ","せんせい",
		"たいかい","てがみ","できごと",
		"デジタル","テスト","デパート",
		"テレビ","でんわ","どうぐ",
		"なまえ","ニュース","にんき",
		"パーティー","べんきょう","マシン",
		"メール","メッセージ","やくそく",
		"ゆめ","ようちえん","ライフ",
		"ラジオ","レンタル","ワールド"],
	"しゅみ":["アイドル","アニメ","うた",
		"えいが","おかし","おしゃべり",
		"おままごと","おもちゃ","おんがく",
		"カード","かいもの","カメラ",
		"かんしょう","かんせん","グルメ",
		"ゲーム","ごっこ","コレクション",
		"コンプリート","ざっし","さんぽ",
		"じてんしゃ","しゅみ","スポーツ",
		"ソフト","ソング","ダイエット",
		"たからもの","たび","ダンス",
		"チャンネル","つくり","つり",
		"デート","デザイン","でんしゃ",
		"ぬいぐるみ","パソコン","はな",
		"ヒーロー","ひるね","ヒロイン",
		"ファッション","ぼうけん","ボード",
		"ボール","ほん","まつり",
		"まんが","やすみ","よてい",
		"りゅうこう","りょこう","ルック"]};

const FishingPoint=[[null,null],
	[9,7],
	[7,13],
	[15,16],
	[18,18],
	[18,19],[19,19],
	[16,20],[17,20],[18,20],[19,20],
	[17,21],[18,21],[19,21],
	[17,22],[18,22],[19,22],
	[17,23],[18,23],[19,23],
	[17,24],[18,24],[19,24],
	[17,29],[18,29],[19,29],
	[17,30],[18,30],[19,30],
	[16,31],[17,31],[18,31],[19,31],[20,31],
	[16,32],[17,32],[18,32],[19,32],[20,32],
	[16,35],[17,35],[18,35],[19,35],[20,35],
	[16,36],[17,36],[18,36],[19,36],[20,36],
	[16,37],[17,37],[18,37],[19,37],[20,37],
	[16,38],[17,38],[18,38],[19,38],[20,38],[21,38],[22,38],
	[16,39],[17,39],[18,39],[19,39],[20,39],[21,39],[22,39],
	[16,40],[17,40],[18,40],[19,40],[20,40],[21,40],[22,40],
	[16,41],[17,41],[18,41],[19,41],[20,41],[21,41],[22,41],
	[16,42],[17,42],[18,42],[19,42],[20,42],[21,42],[22,42],[23,42],
	[16,43],[17,43],[18,43],[19,43],[20,43],[21,43],[22,43],[23,43],[24,43],[25,43],[26,43],[27,43],[28,43],[29,43],[30,43],
	[19,44],[20,44],[21,44],[22,44],[23,44],[24,44],[25,44],[26,44],[27,44],[28,44],[29,44],[30,44],[31,44],[32,44],
	[20,45],[21,45],[22,45],[23,45],[24,45],[25,45],[26,45],[27,45],[28,45],[29,45],[30,45],[31,45],[32,45],
	[23,46],[24,46],[25,46],[26,46],[27,46],[28,46],[29,46],[30,46],[31,46],[32,46],[33,46],[34,46],
	[27,47],[28,47],[29,47],[30,47],[31,47],[32,47],[33,47],[34,47],
	[30,48],[31,48],[32,48],[33,48],[34,48],
	[31,49],[32,49],[33,49],[34,49],[35,49],
	[31,50],[32,50],[33,50],
	[31,51],[32,51],[33,51],
	[31,52],[32,52],[33,52],[34,52],[35,52],
	[31,53],[32,53],[33,53],[34,53],[35,53],
	[33,54],[34,54],[35,54],
	[33,55],[34,55],[35,55],
	[31,56],[32,56],[33,56],[34,56],[35,56],
	[31,57],[32,57],[33,57],[34,57],[35,57],
	[30,58],[31,58],[32,58],[33,58],[34,58],[35,58],
	[27,59],[28,59],[29,59],[30,59],[31,59],[32,59],[33,59],[34,59],
	[26,60],[27,60],[28,60],[29,60],[30,60],[31,60],[32,60],[33,60],
	[26,61],[27,61],[28,61],[29,61],[30,61],[31,61],
	[26,62],[27,62],[28,62],[29,62],[30,62],[31,62],
	[26,63],[27,63],[28,63],[29,63],[30,63],[31,63],[32,63],
	[24,64],[25,64],[26,64],[27,64],[28,64],[29,64],
	[24,65],[25,65],[26,65],[27,65],[28,65],
	[22,66],[23,66],[24,66],[25,66],[26,66],[27,66],[28,66],
	[22,67],[23,67],[24,67],[25,67],[26,67],[27,67],[28,67],
	[22,68],[23,68],[24,68],[25,68],[26,68],
	[20,69],[21,69],[22,69],[23,69],[24,69],[25,69],[26,69],
	[20,70],[21,70],[22,70],[23,70],[24,70],[25,70],
	[20,71],[21,71],[22,71],[23,71],[24,71],[25,71],
	[20,72],[21,72],[22,72],[23,72],[24,72],[25,72],
	[20,73],[21,73],[22,73],[23,73],
	[21,74],
	[21,75],
	[21,83],[22,83],[23,83],
	[14,98],
	[14,99],
	[14,100],[15,100],[16,100],[19,100],[20,100],[23,100],[24,100],
	[14,101],[15,101],[16,101],[17,101],[18,101],[19,101],[20,101],[21,101],[22,101],[23,101],[24,101],
	[14,102],[15,102],[16,102],[17,102],[18,102],[19,102],[20,102],[21,102],[22,102],[23,102],[24,102],
	[14,103],[15,103],[16,103],[17,103],[18,103],[19,103],[20,103],[21,103],[22,103],[23,103],[24,103],
	[14,104],[15,104],[16,104],[17,104],[18,104],[19,104],[20,104],[21,104],[22,104],[23,104],[24,104],[25,104],
	[14,105],[15,105],[16,105],[17,105],[18,105],[19,105],[20,105],[21,105],[22,105],[23,105],[24,105],[25,105],
	[9,106],[10,106],[11,106],[12,106],[13,106],[14,106],[15,106],[16,106],[17,106],[18,106],[19,106],[20,106],[23,106],[24,106],[25,106],
	[7,107],[8,107],[9,107],[10,107],[11,107],[12,107],[13,107],[14,107],[15,107],[16,107],[17,107],[18,107],[19,107],[20,107],[23,107],[24,107],[25,107],
	[9,108],[10,108],[11,108],[12,108],[13,108],[14,108],[15,108],[16,108],[17,108],[18,108],[19,108],[20,108],[21,108],[22,108],[23,108],[24,108],[25,108],
	[9,109],[10,109],[11,109],[12,109],[13,109],[14,109],[15,109],[16,109],[17,109],[18,109],[19,109],[20,109],[21,109],[22,109],[23,109],
	[8,110],[9,110],[10,110],[11,110],[12,110],[13,110],[14,110],[15,110],[16,110],[17,110],[18,110],[19,110],
	[8,111],[9,111],[10,111],[11,111],[12,111],
	[7,112],[8,112]];

class GPRNG{
	constructor(seed){
		this.seed=seed;
		this.addValue=0x6073;
		this.multTable=[];
		for(let i=0;i<32;i++){
			this.multTable.push((0x41C64E6D<<i)&0xffffffff);
		}
		this.addValueReverse=0x0A3561A1;
		this.multTableReverse=[];
		for(let i=0;i<32;i++){
			this.multTable.push((0xEEB9EB65<<i)&0xffffffff);
		}
	}
	next(){
		this.seed=(this.safeMult32(this.seed,this.multTable)+this.addValue)&0xffffffff;
		return (this.seed>>16)&0x0000ffff;
	}
	prev(){
		this.seed=(this.safeMult32(this.seed,this.multTableReverse)+this.addValueReverse)&0xffffffff;
		return (this.seed>>16)&0x0000ffff;
	}
	safeMult32(x,tbl){
		let ans=0;
		for(let i=0;i<32;i++){
			if(x&(1<<i)){
				ans+=tbl[i];
			}
		}
		return ans;
	}
}

class FishRNG extends GPRNG{
	constructor(seed){
		super(seed);
		this.addValue=0x3039;
	}
	getFishPosIndex(){
		const pos=[null,null,null,null,null,null];
		for(let i=0;i<6;){
			pos[i]=this.next()%447;
			if(pos[i]==0){
				pos[i]=447;
			}
			if(pos[i]>3){
				i++;
			}
		}
		return pos;
	}
	getFishPos(){
		return this.getFishPosIndex().map(p=>FishingPoint[p]);
	}
}

class TrendWord{
	constructor(){
		this.unk=0;	//よくわかんない16bit数値。流行終わりの期限っぽい？
		this.fishSeed=0;
		this.words=[0,0];
	}
	getunk0_6(){
		return this.unk&0x007f;	//0000 0000 0111 1111
	}
	getunk7_13(){
		return (this.unk>>7)&0x007f;	//0011 1111 1000 0000
	}
	getunk14(){
		return (this.unk>>14)&0x0001;	//0100 0000 0000 0000
	}
	setunk0_6(val){
		this.unk&=0xff80;
		this.unk|=val&0x7f;
	}
	setunk7_13(val){
		this.unk&=0xc07f;
		this.unk|=(val&0x7f)<<7;
	}
	setunk14(val){
		this.unk&=0xbfff;
		this.unk|=(val&0x0001)<<14;
	}
}

function generateTrend(seed){
	const rand=new GPRNG(seed);
	const trends=[new TrendWord(),new TrendWord(),new TrendWord(),new TrendWord(),new TrendWord()];
	for(let i=0;i<5;i++){
		trends[i].words[0]=0x1400+(rand.next()%69);
		if(rand.next()&1){
			trends[i].words[1]=0x1800+(rand.next()%45);
		}else{
			trends[i].words[1]=0x1A00+(rand.next()%54);
		}
		trends[i].setunk14(rand.next()&1);
		let unk=rand.next()%98;
		if(unk>50){
			unk=rand.next()%98;
			if(unk>80){
				unk=rand.next()%98;
			}
		}
		trends[i].setunk7_13(unk+30);
		trends[i].setunk0_6((rand.next()%(unk+1))+30);
		trends[i].fishSeed=rand.next();
	}
	const unkCheck=(a,b)=>{
		if(a.getunk0_6()>b.getunk0_6()){
			return 1;
		}
		if(a.getunk0_6()<b.getunk0_6()){
			return 0;
		}
		if(a.getunk7_13()>b.getunk7_13()){
			return 1;
		}
		if(a.getunk7_13()<b.getunk7_13()){
			return 0;
		}
		return rand.next()&1;
	};
	for(let i=0;i<5;i++){
		for(let j=i+1;j<5;j++){
			if(unkCheck(trends[j],trends[i])!=0){	//引数はj,iの順であってるみたい
				[trends[j],trends[i]]=[trends[i],trends[j]];
			}
		}
	}
	return [trends[0],rand.next(),rand.next()];	//流行語データと、ついでに次の乱数がIDくじっぽいので
}

async function searchSimple(seed, startframe, maxframe){
	const rand=new GPRNG(seed);
	const result=[];
	for(let i=0;i<startframe;i++){
		rand.next();
	}
	for(let i=startframe;i<maxframe;i++){
		const [trend,kuji1,kuji2]=generateTrend(rand.seed);
		//乱数消費数、流行語、IDくじを返す
		result.push([i,trend,kuji1,kuji2]);
		if(i%1024==0){
			//ビジー対策に適当なタイミングでUI処理を実行させたい
			await new Promise(resolve=>{setTimeout(resolve,1)});
		}
		rand.next();
	}
	return result;
}
async function searchByTrends(seed, trend1, trend2, maxframe){
	return (await searchSimple(seed,0,maxframe)).filter(result=>result[1].words[0]==trend1 && result[1].words[1]==trend2);
}

function getFishingPointByFishSeed(seed){
	const fish=new FishRNG(seed);
	return fish.getFishPos();
}
function getFishingPointByTrend(trend){
	return getFishingPointByFishSeed(trend.fishSeed);
}

const getTrendWordById=(id)=>{
	const category=id&0xfe00;
	const trend=id&0x1ff;
	if(category==0x1400){
		return TrendWords["じょうたい"][trend];
	}else if(category==0x1800){
		return TrendWords["せいかつ"][trend];
	}else if(category==0x1A00){
		return TrendWords["しゅみ"][trend];
	}
	return "<不明>";
};

export {GPRNG,FishRNG,searchSimple,searchByTrends,getFishingPointByFishSeed,getFishingPointByTrend,getTrendWordById};
