function SVGSwap(){
        var swapPool = {};
        // Object arrays for which swap is needed. For every file define own array.
        var logoObjects = [
          	Y.one('#logoImage img'),
        	Y.one('#new-page-section img')
        ];
        var cafeObjects = [Y.one('#the-cafe-section .sqs-row .sqs-col-8 img')];
        var contactObjects = [Y.one('#block-yui_3_17_2_4_1423063022565_8791 img')];
        var appeObjects = [Y.one('#block-yui_3_17_2_4_1423063022565_17047 img')];
        // For each separate file to swap define code-name/file-name/object-array to same index in arrays
        var swapNameList = ["logo","cafe","contact","appe"];
        var swapFileList = ["nav-logo.svg","THE-CAFE.svg","CONTACT.svg","appetizing-since.svg"];
        var swapObjectsArrays = [logoObjects,cafeObjects,contactObjects,appeObjects];
    	// If you use Squarespace "file upload trick", then define this. If you use some external filehost with static folder link, then put folder path in quotes
        var linkPath = "/s/";
        //Building swapPool with all properties
        swapNameList.forEach(function(value, index){
          	swapPool[value] = {};
        	swapPool[value].filePath = linkPath+swapFileList[index];
          	swapPool[value].swapObject = swapObjectsArrays[index];
        });
        // Function defines if browser support .svg
        if(Y.one('html.svg')){
          for(var key in swapPool){
             for(var i in swapPool[key].swapObject){
               //YUI array-functions cut-off
               if(typeof swapPool[key].swapObject[i] == "object"){
            		swapPool[key].swapObject[i].setAttribute('src', swapPool[key].filePath);
               //Data-src+data-image change to fix Apple devices bug
                 	swapPool[key].swapObject[i].setAttribute('data-src', swapPool[key].filePath);
                 	swapPool[key].swapObject[i].setAttribute('data-image', swapPool[key].filePath);
               }
            }
          }
        }

Y.on('load', SVGSwap());
