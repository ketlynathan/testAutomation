const puppetter = require('puppeteer');


(async () =>{
    const browser = await puppetter.launch({headless: false});
    const page = await browser.newPage();

    //fazer login
    await page.goto('https://acme-test.uipath.com/login');
    //await page.screenshot({path: 'test.png'});
    
    await page.waitForSelector('input[name="email"]');
    await page.type('input[name="email"]', 'Yourmail', {delay:50});
    await page.type('input[name="password"]', 'Yourpassword', {delay:50});
    await page.keyboard.press('Enter');
    //esperar carregar
    await page.waitForNavigation();
    //CLICAR NO BOTÃO WORKiTEMS
    await page.click('[href="https://acme-test.uipath.com/work-items"]');
     
    await page.pdf({path: 'workItems.pdf', format:'A4'});
    
    

    
   
   

    
    
    /*await page.evaluate(() => {
    const nodeList = document.querySelectorAll('.table')
    const imgArray = [...nodeList]
    });
    console.log(imgArray)*/


    //CAPTURAR RANGE DE DADOS
    /*const id = await page.$eval('', (el) => el.textContent || false);
    const description = await page.$eval('', (el) => el.textContent || false);
    const type = await page.$eval('', (el) => el.textContent || false);
    const status = await page.$eval('', (el) => el.textContent || false);
    const dateDoc = await page.$eval('', (el) => el.textContent || false);*/

    await browser.close();
})();