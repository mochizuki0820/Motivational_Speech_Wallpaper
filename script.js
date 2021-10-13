//初期状態を決定するクラス
class WallPaper{
    //各情報をセットするコンストラクタ
    constructor(text, colorCode, imgUrl, vertical, horizontal){
        this.text = text;
        this.colorCode = colorCode;
        this.imgUrl = imgUrl;
        this.vertical = vertical;
        this.horizontal = horizontal;
    }

    //垂直方向のマップ
    verticalTable = {
            "top" : "align-items-start",
            "center" : "align-items-center",
            "bottom" : "align-items-end"
        }

    //水平方向のマップ
    horizontalTable = {
            "left" :  "justify-content-start",
            "center" :  "justify-content-center",
            "right" :  "justify-content-end",
    }


}

//WallPaperクラスのオブジェクトとdomObjを受け取ってdomObjに画像とテキストを加えて返す関数
function motivationalSpeechWallpaper(wallPaper, domObj){

    //画像とテキストを包むdiv
    let containerDiv = document.createElement("div");
    containerDiv.classList.add("container", "d-flex", "justify-content-center", "py-4");

    //背景画像にテキストを載せるdiv
    let wallDiv = document.createElement("div");
    wallDiv.classList.add("d-flex","vh-75","col-12", "col-md-9", "backGroundImg", wallPaper.horizontalTable[wallPaper.horizontal], wallPaper.verticalTable[wallPaper.vertical]);
    wallDiv.style = "background-image: url(" + wallPaper.imgUrl + ")";
    let textDiv = document.createElement("div");
    textDiv.classList.add("col-8");
    motivateText = document.createElement("h3");
    motivateText.classList.add("textStyle");
    motivateText.innerHTML = wallPaper.text;
    motivateText.style.color = wallPaper.colorCode;
    textDiv.append(motivateText);
    wallDiv.append(textDiv);

    //containerDivにwallDivをappend
    containerDiv.append(wallDiv);

    //”target”タグのdivにcontainerDivをappendして、そのオブジェクトを返す
    domObj.append(containerDiv);
    return domObj;
}



let wallPaper1 = new WallPaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "2c3e50", "https://recursionist.io/img/different-job.png", "center", "center");
let wallPaper2 = new WallPaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "2cff50", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "bottom", "left");
let wallPaper3 = new WallPaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "top", "right");


let domObj = document.getElementById("target");
motivationalSpeechWallpaper(wallPaper1, domObj);
motivationalSpeechWallpaper(wallPaper2, domObj);
motivationalSpeechWallpaper(wallPaper3, domObj);
