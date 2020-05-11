let puppeteer = require("puppeteer");
let cFile = process.argv[2];
let address=process.argv[3];
let fs = require("fs");

(async function (){

 try{
    let data = await fs.promises.readFile(cFile);
    let { url, pwd, user ,product1,product2} = JSON.parse(data);
    // launch browser
    let browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ["--start-maximized", "--disable-notifications",'--no-sandbox', '--disable-setuid-sandbox',"--chrome"]
    });
    let tabs = await browser.pages();
    let tab = tabs[0];
    
//     await tab.goto(url, { waitUntil: "networkidle2" });
//     await tab.waitForSelector("input[type=email]");
//     await tab.type("input[type=email]", user, { delay: 120 });
    
//     await Promise.all([
//     tab.click("#continue.a-button-input"), tab.waitForNavigation({
//         waitUntil: "networkidle2"
//       })
//     ])
//     await tab.waitForSelector("input[type=password]");
//     await tab.type("input[type=password]", pwd, { delay: 120 });
 
//  await Promise.all([
//     tab.click("#signInSubmit"), tab.waitForNavigation({
//         waitUntil: "networkidle2"
//       })
//     ])
    let tab1 = tabs[0];
    await tab1.goto(product1, { waitUntil: "networkidle2" });
    await tab1.waitForSelector("#add-to-cart-button");
    await Promise.all([
        tab1.click("#add-to-cart-button"), tab1.waitForNavigation({
            waitUntil: "networkidle2"
          })
        ])
    await tab1.waitForSelector("#hlb-ptc-btn-native");
    let tab2 = tabs[0];
    await tab2.goto(product2, { waitUntil: "networkidle2" });
    await tab2.waitForSelector("#add-to-cart-button");
    await Promise.all([
        tab2.click("#add-to-cart-button"), tab2.waitForNavigation({
            waitUntil: "networkidle2"
          })
        ])
    await tab2.waitForSelector("#hlb-ptc-btn-native");
    await Promise.all([
        tab2.click("#hlb-ptc-btn-native"), tab2.waitForNavigation({
            waitUntil: "networkidle2"
          })
        ])
        await tab.waitForSelector("input[type=email]");
        await tab.type("input[type=email]", user, { delay: 120 });
        
        await Promise.all([
        tab.click("#continue.a-button-input"), tab.waitForNavigation({
            waitUntil: "networkidle2"
          })
        ])
        await tab.waitForSelector("input[type=password]");
        await tab.type("input[type=password]", pwd, { delay: 120 });
     
     await Promise.all([
        tab.click("#signInSubmit"), tab.waitForNavigation({
            waitUntil: "networkidle2"
          })
        ])

        let data1 = await fs.promises.readFile(address);
        let { name,phone,pincode ,house,area,landmark,town,state} = JSON.parse(data1);
        await tab.waitForSelector("#enterAddressFullName");
    await tab2.type("#enterAddressFullName",name , { delay: 120 });
    await tab2.type("#enterAddressPhoneNumber",phone , { delay: 120 });
    await tab2.type("#enterAddressPostalCode",pincode , { delay: 120 });
    await tab2.type("#enterAddressAddressLine1",house , { delay: 120 });
    await tab2.type("#enterAddressAddressLine2",area , { delay: 120 });
    await tab2.type("#enterAddressLandmark",landmark , { delay: 120 });
    await tab2.type("#enterAddressCity",town , { delay: 120 });
    await tab2.type("#enterAddressStateOrRegion",state , { delay: 120 });
      
    // await Promise.all([
    //     tab2.click(".enterDeliveryPrefsField"), tab2.waitForNavigation({
    //         waitUntil: "networkidle2"
    //       })
    //     ])
    //     await tab.waitForSelector("option[value=RES]");
    //     await Promise.all([
    //         tab2.click("option[value=RES]"), tab2.waitForNavigation({
    //             waitUntil: "networkidle2"
    //           })
    //         ])
            await Promise.all([
                tab2.click(".a-button-text.submit-button-with-name"), tab2.waitForNavigation({
                    waitUntil: "networkidle2"
                  })
                ])
            

 }catch (err) {
    console.log(err)
  }
})()
