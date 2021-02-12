
const UIInit=(startSearchCB)=>{
	const buttonStartSearch=document.getElementById("startSearch");
	buttonStartSearch.addEventListener("click",startSearchCB);
};

const getGameVersion=()=>{
	return document.searchForm.GameVersion.value;
};

const getSearchMethod=()=>{
	return document.searchForm.SearchMethod.value;
};
const getSearchVBlankCount=()=>{
	return parseInt(document.searchForm.VBlankCount.value);
};
const getSearchPoint=()=>{
	return parseInt(document.searchForm.SearchPoint.value);
};

const getTID=()=>{
	const tid=document.searchForm.TID;
	if(tid.validity.valid){
		return parseInt(tid.value,10);
	}
	return null;
};

const getSeed=()=>{
	const seed=document.searchForm.InitialSeed;
	if(seed.validity.valid){
		return parseInt(seed.value,16);
	}
	return null;
};

const getTrends=()=>{
	const selectTrendWord1=document.searchForm.TrendWord1;
	const selectTrendWord2=document.searchForm.TrendWord2;
	return [parseInt(selectTrendWord1.value,10),parseInt(selectTrendWord2.value,10)];
};

const updateResultTableHead=(headers)=>{
	const head=document.getElementById("resultTableHead");
	while(head.children.length>0){
		head.removeChild(head.children[0]);
	}
	const tr=document.createElement("tr");
	headers.forEach(header=>{
		const th=document.createElement("th");
		th.textContent=header;
		tr.appendChild(th);
	});
	head.appendChild(tr);
}

const initResultTableBody=()=>{
	const body=document.getElementById("resultTableBody");
	while(body.children.length>0){
		body.removeChild(body.children[0]);
	}
};
const updateResultTableBody=(results,callback)=>{
	const body=document.getElementById("resultTableBody");
	const tr=document.createElement("tr");
	results.forEach((result,index)=>{
		const td=document.createElement("td");
		if(index==0){
			const radio=document.createElement("input");
			radio.type="radio";
			radio.name="resultRadio";
			radio.addEventListener("change",callback);
			td.appendChild(radio);
		}else{
			td.textContent=result;
		}
		tr.appendChild(td);
	});
	body.appendChild(tr);
}

const plotFishingPoint=(points)=>{
	points.forEach((point,index)=>{
		const id="fish-"+(index+1);
		const circlediv=document.getElementById(id);
		circlediv.style.left=point[0]*16+"px";
		circlediv.style.top=point[1]*16+"px";
	});
};

export {UIInit,getGameVersion,getSearchMethod,getSearchVBlankCount,getSearchPoint,getTID,getSeed,getTrends,updateResultTableHead,initResultTableBody,updateResultTableBody,plotFishingPoint};
