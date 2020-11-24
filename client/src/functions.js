import puppeteer from 'puppeteer';

export async function scrapeArticle(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    try {
        // const [el] = await page.$x('//*[@id="story"]/section')                         
        // const txt = await el.getProperty('textContent');
        // const rawTxt = await txt.jsonValue();
        // console.log(rawTxt);
        const [el] = await page.$x('//*[@id="story"]/section');
        const txt = await el.getProperty('textContent');
        const rawTxt = await txt.jsonValue();
       
        return rawTxt; 
    } catch(err) {
        console.log('Opps, some error =>>> ', err)
    }
   

    browser.close();
}

