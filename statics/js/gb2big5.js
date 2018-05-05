var Default_isFT = 0		//默认是否繁体，0-简体，1-繁体
var StranIt_Delay = 10 //翻译延时毫秒（设这个的目的是让网页先流畅的显现出来）

//－－－－－－－代码开始，以下别改－－－－－－－
//转换文本
function StranText(txt,toFT,chgTxt)
{
	if(txt==""||txt==null)return ""
	toFT=toFT==null?BodyIsFt:toFT
	if(chgTxt) txt=txt.replace((toFT?"简":"繁"),(toFT?"繁":"简"))
	//alert(toFT);return;
	if(toFT){return Traditionalized(txt)}
	else {return Simplized(txt)}
}
//转换对象，使用递归，逐层剥到文本
function StranBody(fobj)
{
	if(typeof(fobj)=="object"){
		var obj=fobj.childNodes
	}else {
		BodyIsFt = BodyIsFt=="1" ? 0 : 1;
		setCookie(JF_cn,BodyIsFt,7)
		var obj=document.body.childNodes
	}
	
	for(var i=0;i<obj.length;i++){
		var OO=obj.item(i)
		if("||BR|HR|TEXTAREA|".indexOf("|"+OO.tagName+"|")>0)continue;
		if(OO.title!=""&&OO.title!=null)OO.title=StranText(OO.title);
		if(OO.alt!=""&&OO.alt!=null)OO.alt=StranText(OO.alt);
		if(OO.tagName=="INPUT"&&OO.value!=""&&OO.type!="text"&&OO.type!="hidden")OO.value=StranText(OO.value);
		if(OO.nodeType==3){
			OO.data=StranText(OO.data)
		}
		else StranBody(OO)
	}
}

function JTPYStr()
{
	return '询系皑蔼碍爱袄奥坝罢摆败颁办绊帮绑镑谤剥饱宝报鲍辈贝钡狈备惫绷笔毕毙币闭辟边编贬变辩辫标鳖别瘪濒滨宾摈饼并拨钵铂驳补财采参残惭惨灿苍舱仓沧厕侧册测层诧搀掺蝉馋谗缠铲产阐颤场尝长偿肠厂畅钞车彻尘陈衬撑称惩诚骋迟驰耻齿炽冲虫宠畴踌筹绸丑橱厨锄雏础储触处传疮闯创锤纯绰辞词赐聪葱囱从丛凑蹿窜错达带贷担单郸掸胆惮诞弹当挡党荡档捣岛祷导盗灯邓敌涤递缔颠点垫电钓调谍叠钉顶锭订丢东动栋冻斗犊独读赌镀锻断缎兑队对顿钝夺堕鹅额讹恶饿儿尔饵贰发罚阀珐矾钒烦范贩饭访纺飞诽废费纷坟奋愤粪丰枫锋风疯冯缝讽凤肤辐抚辅赋复负讣妇缚该钙盖干赶秆赣冈刚钢纲岗镐搁鸽阁铬个给龚宫巩贡钩沟构购够蛊顾雇剐挂关观馆惯贯广规硅归龟闺轨诡柜贵刽辊滚锅国过骇韩汉号阂鹤贺横轰鸿红后壶护沪户哗华画划话怀坏欢环还缓换唤痪焕涣黄谎挥辉毁贿秽会烩汇讳诲绘荤浑获货祸击机积饥迹讥鸡绩缉极辑级挤几蓟剂济计记际继纪夹荚颊贾钾价驾歼监坚笺间艰缄检碱硷拣捡简俭减荐槛鉴践贱见键舰剑饯渐溅涧将浆蒋桨奖讲酱胶浇骄娇搅铰矫侥脚饺缴绞轿较阶节杰洁结诫届紧锦仅谨进晋烬尽劲荆茎鲸惊经颈静镜径痉竞净纠厩旧驹举据锯惧剧鹃绢觉决诀绝钧军骏开凯颗壳课垦恳抠库裤夸块侩宽矿旷况亏岿窥馈溃扩阔蜡腊莱来赖蓝栏拦篮阑兰澜谰揽览懒缆烂滥捞劳涝乐镭垒类泪厘篱离里鲤礼丽厉励砾历傈沥隶俩联莲连镰怜涟帘敛脸链恋炼练粮凉两辆谅疗辽镣猎临邻鳞凛赁龄铃灵岭领馏刘龙聋咙笼垄拢陇楼娄搂篓芦卢颅庐炉掳卤虏鲁赂禄录陆驴吕铝侣屡缕虑滤绿峦挛孪滦乱抡轮伦仑沦纶论萝罗逻锣箩骡骆络妈玛码蚂马骂吗买麦卖迈脉瞒馒蛮满谩猫锚铆贸么酶没镁门闷们锰梦谜弥觅幂绵缅庙灭悯闽鸣铭谬谋亩呐钠纳难挠脑恼闹馁内拟腻撵酿鸟聂啮镊镍柠狞宁拧钮纽脓浓农疟诺欧鸥殴呕沤盘庞抛赔喷鹏骗飘频贫苹凭评泼颇扑铺仆朴谱脐齐骑岂启气弃讫牵钎铅迁签谦钱钳潜浅谴堑枪呛墙蔷强抢锹桥乔侨翘窍窃钦亲寝轻氢倾顷请庆琼穷趋区躯驱龋颧权劝却鹊确让饶扰绕热韧认纫荣绒软锐闰润洒萨鳃赛叁伞丧骚扫涩杀刹纱筛晒删闪陕赡缮墒伤赏烧绍赊摄慑设绅审婶肾渗声绳胜圣师狮湿诗尸时蚀实识驶势适释饰视试寿兽枢输书赎属术树竖数帅双谁税顺说硕烁丝饲耸怂颂讼诵擞苏诉肃虽随绥岁孙损笋缩琐锁獭挞酞态摊贪瘫滩坛谭谈叹汤烫涛绦讨腾誊锑题体屉条贴铁厅听烃铜统头秃图涂团颓蜕脱鸵驮驼椭袜弯湾顽万网韦违围为潍维苇伟伪纬谓卫温闻纹稳问挝蜗涡窝卧呜钨乌诬无芜吴坞雾务误锡牺袭习铣戏细虾辖峡侠狭厦吓锨鲜纤咸贤衔闲显险现献县馅宪线厢镶乡详响项萧嚣销晓啸协挟携胁谐写泻谢锌衅兴汹锈绣虚嘘须许叙绪续轩悬压鸦鸭哑亚讶阉烟盐严颜阎艳厌砚彦谚验鸯杨扬疡阳养样瑶摇尧遥窑谣药爷页业叶医铱颐遗仪蚁艺亿忆义诣议谊译异绎荫阴银饮隐樱婴鹰应缨莹萤营荧蝇赢颖哟拥佣痈咏优忧邮铀犹游诱于舆余鱼渔娱与屿语郁狱誉预驭鸳渊辕园员圆缘远愿约跃钥粤悦阅云郧匀陨运蕴酝晕韵杂灾载攒暂赞赃脏凿枣责择则泽贼赠轧铡闸栅诈斋债毡盏斩辗崭栈占战绽张涨帐账胀赵蛰辙锗这贞针侦诊镇阵挣睁狰争帧郑证织职执纸挚掷帜制质滞钟终种肿众诌轴皱昼骤猪诸诛烛瞩嘱贮铸筑注驻专砖转赚桩装妆壮状锥赘坠缀谆准着浊兹资渍踪综总纵邹诅组钻';
}
function FTPYStr()
{
	return '詢係皚藹礙愛襖奧壩罷擺敗頒辦絆幫綁鎊謗剝飽寶報鮑輩貝鋇狽備憊繃筆畢斃幣閉闢邊編貶變辯辮標鱉別癟瀕濱賓擯餅並撥缽鉑駁補財採參殘慚慘燦蒼艙倉滄廁側冊測層詫攙摻蟬饞讒纏鏟產闡顫場嘗長償腸廠暢鈔車徹塵陳襯撐稱懲誠騁遲馳恥齒熾沖蟲寵疇躊籌綢醜櫥廚鋤雛礎儲觸處傳瘡闖創錘純綽辭詞賜聰蔥囪從叢湊躥竄錯達帶貸擔單鄲撣膽憚誕彈當擋黨蕩檔搗島禱導盜燈鄧敵滌遞締顛點墊電釣調諜疊釘頂錠訂丟東動棟凍鬥犢獨讀賭鍍鍛斷緞兌隊對頓鈍奪墮鵝額訛惡餓兒爾餌貳發罰閥琺礬釩煩範販飯訪紡飛誹廢費紛墳奮憤糞豐楓鋒風瘋馮縫諷鳳膚輻撫輔賦復負訃婦縛該鈣蓋幹趕稈贛岡剛鋼綱崗鎬擱鴿閣鉻個給龔宮鞏貢鉤溝構購夠蠱顧僱剮掛關觀館慣貫廣規矽歸龜閨軌詭櫃貴劊輥滾鍋國過駭韓漢號閡鶴賀橫轟鴻紅後壺護滬戶嘩華畫劃話懷壞歡環還緩換喚瘓煥渙黃謊揮輝毀賄穢會燴匯諱誨繪葷渾獲貨禍擊機積饑跡譏雞績緝極輯級擠幾薊劑濟計記際繼紀夾莢頰賈鉀價駕殲監堅箋間艱緘檢鹼鹼揀撿簡儉減薦檻鑒踐賤見鍵艦劍餞漸濺澗將漿蔣槳獎講醬膠澆驕嬌攪鉸矯僥腳餃繳絞轎較階節傑潔結誡屆緊錦僅謹進晉燼盡勁荊莖鯨驚經頸靜鏡徑痙競淨糾廄舊駒舉據鋸懼劇鵑絹覺決訣絕鈞軍駿開凱顆殼課墾懇摳庫褲誇塊儈寬礦曠況虧巋窺饋潰擴闊蠟臘萊來賴藍欄攔籃闌蘭瀾讕攬覽懶纜爛濫撈勞澇樂鐳壘類淚釐籬離裡鯉禮麗厲勵礫曆栗瀝隸倆聯蓮連鐮憐漣簾斂臉鏈戀煉練糧涼兩輛諒療遼鐐獵臨鄰鱗凜賃齡鈴靈嶺領餾劉龍聾嚨籠壟攏隴樓婁摟簍蘆盧顱廬爐擄鹵虜魯賂祿錄陸驢呂鋁侶屢縷慮濾綠巒攣孿灤亂掄輪倫侖淪綸論蘿羅邏鑼籮騾駱絡媽瑪碼螞馬罵嗎買麥賣邁脈瞞饅蠻滿謾貓錨鉚貿麼霉沒鎂門悶們錳夢謎彌覓冪綿緬廟滅憫閩鳴銘謬謀畝吶鈉納難撓腦惱鬧餒內擬膩攆釀鳥聶嚙鑷鎳檸獰寧擰鈕紐膿濃農瘧諾歐鷗毆嘔漚盤龐拋賠噴鵬騙飄頻貧蘋憑評潑頗撲鋪僕樸譜臍齊騎豈啓氣棄訖牽釬鉛遷籤謙錢鉗潛淺譴塹槍嗆牆薔強搶鍬橋喬僑翹竅竊欽親寢輕氫傾頃請慶瓊窮趨區軀驅齲顴權勸卻鵲確讓饒擾繞熱韌認紉榮絨軟銳閏潤灑薩鰓賽杬傘喪騷掃澀殺剎紗篩曬刪閃陝贍繕濕傷賞燒紹賒攝懾設紳審嬸腎滲聲繩勝聖師獅濕詩屍時蝕實識駛勢適釋飾視試壽獸樞輸書贖屬術樹豎數帥雙誰稅順說碩爍絲飼聳慫頌訟誦擻蘇訴肅雖隨綏歲孫損筍縮瑣鎖獺撻太態攤貪癱灘壇譚談嘆湯燙濤絛討騰謄銻題體屜條貼鐵廳聽烴銅統頭禿圖塗團頹蛻脫鴕馱駝橢襪彎灣頑萬網韋違圍為濰維葦偉偽緯謂衛溫聞紋穩問撾蝸渦窩臥嗚鎢烏誣無蕪吳塢霧務誤錫犧襲習銑戲細蝦轄峽俠狹廈嚇杴鮮纖鹹賢銜閒顯險現獻縣餡憲線廂鑲鄉詳響項蕭囂銷曉嘯協挾攜脅諧寫瀉謝鋅釁興洶鏽繡虛噓須許敘緒續軒懸壓鴉鴨啞亞訝閹煙鹽嚴顏閻艷厭硯彥諺驗鴦楊揚瘍陽養樣瑤搖堯遙窯謠藥爺頁業葉醫銥頤遺儀蟻藝億憶義詣議誼譯異繹蔭陰銀飲隱櫻嬰鷹應纓瑩螢營熒蠅贏穎喲擁傭癰詠優憂郵鈾猶遊誘於輿餘魚漁娛與嶼語鬱獄譽預馭鴛淵轅園員圓緣遠願約躍鑰粵悅閱雲鄖勻隕運蘊醞暈韻雜災載攢暫贊贓髒鑿棗責擇則澤賊贈軋鍘閘柵詐齋債氈盞斬輾嶄堆佔戰綻張漲帳賬脹趙蟄轍鍺這貞針偵診鎮陣掙睜猙爭幀鄭證織職執紙摯擲幟製質滯鐘終種腫眾謅軸皺晝驟豬諸誅燭矚囑貯鑄築註駐專磚轉賺樁裝妝壯狀錐贅墜綴諄準著濁茲資漬蹤綜總縱鄒詛組鑽';
}
function Traditionalized(cc){
	var str='',ss=JTPYStr(),tt=FTPYStr();
	for(var i=0;i<cc.length;i++)
	{
		if(cc.charCodeAt(i)>10000&&ss.indexOf(cc.charAt(i))!=-1)str+=tt.charAt(ss.indexOf(cc.charAt(i)));
  		else str+=cc.charAt(i);
	}
	return str;
}
function Simplized(cc){
	var str='',ss=JTPYStr(),tt=FTPYStr();
	for(var i=0;i<cc.length;i++)
	{
		if(cc.charCodeAt(i)>10000&&tt.indexOf(cc.charAt(i))!=-1)str+=ss.charAt(tt.indexOf(cc.charAt(i)));
  		else str+=cc.charAt(i);
	}
	return str;
}

function setCookie(name, value)		//cookies设置
{
	var argv = setCookie.arguments;
	var argc = setCookie.arguments.length;
	var expires = (argc > 2) ? argv[2] : null;
	if(expires!=null)
	{
		var LargeExpDate = new Date ();
		LargeExpDate.setTime(LargeExpDate.getTime() + (expires*1000*3600*24));
	}
	document.cookie = name + "=" + escape (value)+((expires == null) ? "" : ("; expires=" +LargeExpDate.toGMTString()));
}

function getCookie(Name)			//cookies读取
{
	var search = Name + "="
	if(document.cookie.length > 0) 
	{
		offset = document.cookie.indexOf(search)
		if(offset != -1) 
		{
			offset += search.length
			end = document.cookie.indexOf(";", offset)
			if(end == -1) end = document.cookie.length
			return unescape(document.cookie.substring(offset, end))
		 }
		else return ""
	}
}

/*
var gb2big5_Obj=document.getElementById("gb2big5")
if (gb2big5_Obj)
{
	var JF_cn="ft"+self.location.hostname.toString().replace(/\./g,"")
	var BodyIsFt=getCookie(JF_cn)
	if(BodyIsFt!="1")BodyIsFt=Default_isFT
	with(gb2big5_Obj)
	{
		if(typeof(document.all)!="object") 	//非IE浏览器
		{
			href="javascript:StranBody()"
		}
		else
		{
			href="#";
			onclick= new Function("StranBody();return false")
		}
		title=StranText("点击以繁体中文方式浏览",1,1)
		innerHTML=StranText(innerHTML,1,1)
	}
	if(BodyIsFt=="1"){setTimeout("StranBody()",StranIt_Delay)}
}
*/

var JF_cn="ft"+self.location.hostname.toString().replace(/\./g,"");
var BodyIsFt=getCookie(JF_cn);
console.log(BodyIsFt);
//if(BodyIsFt!="1") BodyIsFt=Default_isFT;
//if(BodyIsFt=="1"){//需把页面转成繁体
//	setTimeout("StranBody()",StranIt_Delay)
//}
$(function () {
	//document.getElementsByClassName('gb_to_big5')
	$(".gb_to_big5").click(function(){
		//alert('clicked.');return;
		//console.log(BodyIsFt,".gb_to_big5");
		BodyIsFt=0;
		if(!BodyIsFt) StranBody();
	})
	
	$(".big5_to_gb").click(function(){
		//alert('clicked.');return;
		//console.log(BodyIsFt,".big5_to_gb");
		BodyIsFt=1;
		if(BodyIsFt){
			StranBody();
		}
		window.location.href=window.location.href.replace('#big5','');
	})
	if(window.location.href.indexOf("big5")>0){
		BodyIsFt=0;
		StranBody();
	}else{
		if(window.location.href.indexOf("#gb")>0) {
			BodyIsFt = 1;
			StranBody();
		}else{
			if(BodyIsFt=='1') {
				BodyIsFt = 0;
				StranBody();
			}
		}
	}
	
})