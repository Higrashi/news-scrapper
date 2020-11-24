const puppeteer = require('puppeteer');

async function scrapeArticle(url){

    try {
        // lunch browser
        var browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox'] 
            });
        // open a new page
        var page = await browser.newPage();
        // enter url in page
        await page.goto(url);
        // wait until <p> elements will be loaded
        await page.waitForSelector("p");
        var article = await page.evaluate(() => {
            // Select all <p> elements 
            var titleNodeList = document.querySelectorAll(`p`);
            var titleLinkArray = [];
            for (var i = 0; i < titleNodeList.length; i++) {
                if(titleNodeList[i].innerText != 'ADVERTISEMENT' && titleNodeList[i].innerText != 'COLLAPSE')
                    titleLinkArray.push(titleNodeList[i].innerText) 
                }
           
            return titleLinkArray;
            
        });
        // close browser
        await browser.close();
        // return article
        return article;
    } catch(err) {
        console.log(err)
    }


    

    
}


module.exports = scrapeArticle;


