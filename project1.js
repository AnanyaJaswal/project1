/*For your project, you will mint NFTs! Ok, not really, but we can pretend, yes? 
You will simulate this by writing some JavaScript code that will create an object that represents your NFT and that will hold its metadata. 
This metadata can be anything you want, so go crazy! An example of this could be values like name, eye color, shirt type, bling, etc. 
Once you have that, you'll need a variable to store all of your NFTs in. 
Next, you'll need a function so you can print the details of your epic NFTs to the console.
*/

let nftkpopcollection = [];
function mintkpopNFT(group_ , name_ ,yearofdebut_ ,awardwins_ ,label_ ) {
  const nft={
      "group" : group_ ,
       "name" : name_,
       "yearofdebut" :yearofdebut_,
      "awardwins" : awardwins_,
      "label" : label_,
  };
  nftkpopcollection.push(nft);
  console.log("minted ones: "+group_ ,"\n");
  
}

function listkpopNFTs () {
    for(let i=0;i<nftkpopcollection.length;i++)
    {
        console.log("GROUP:       " +nftkpopcollection[i].group);
        console.log("NAME:        " +nftkpopcollection[i].name);
        console.log("YEAROFDEBUT  " +nftkpopcollection[i].yearofdebut);
        console.log("AWARDWINS    " +nftkpopcollection[i].awardwins);
        console.log("LABEL        " +nftkpopcollection[i].label);
    }

}

function totalsupply() {
  console.log("\n totalsupply: " +nftkpopcollection.length);
}

mintkpopNFT("BTS","JUNGKOOK",2013,"67 DAESANGS","hybe\n");
mintkpopNFT("SEVENTEEN","MINGYU",2015, "6 DAESANGS","hybe\n");
mintkpopNFT("NEWJEANS" ,"HANI",2022,"2 DAESANGS","hybe\n");
;

listkpopNFTs();
totalsupply();