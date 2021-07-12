Feature('order');

Scenario('test something', ({ I }) => {
    I.amOnPage('/');
    //Логирование
    I.click('//*[@id="box-account-login"]/div/form/table/tbody/tr[1]/td/input')
    I.fillField(`//*[@id="box-account-login"]/div/form/table/tbody/tr[1]/td/input`, 'jarkoe_leto_svejidde_frukti@mail.ru');
    I.fillField(`//*[@id="box-account-login"]/div/form/table/tbody/tr[2]/td/input`, '4093725t');
    I.click(`//*[@id="box-account-login"]/div/form/table/tbody/tr[4]/td/span/button[1]`);
    //Выбор товара
    I.waitForVisible(`//*[@id="notices"]/div/text()`,5);
    I.click(`//*[@id="box-most-popular"]/div/ul/li[1]/a[1]/div[1]/img`);
    I.wait(5);
    I.click(`//*[@id="box-product"]/div[2]/div[2]/div[5]/form/table/tbody/tr/td/input`);
    I.fillField(`//*[@id="box-product"]/div[2]/div[2]/div[5]/form/table/tbody/tr/td/input`, 4);
    //Добавление в корзину
    I.click(`//button[contains(text(),'Add To Cart')]`);
    //переход в корзину
    I.wait(5);
    I.click(`//*[@id="cart"]/a[2]`);
    I.wait(3);
    I.click(`//*[@id="box-checkout-cart"]/div/ul/li/form/div/p[3]/input`);
    I.fillField(`//*[@id="box-checkout-cart"]/div/ul/li/form/div/p[3]/input`, 5);
    //Update
    I.click(`//*[@id="box-checkout-cart"]/div/ul/li/form/div/p[3]/button`);
    I.wait(5);
    I.waitForVisible(`//td[@style="text-align: center;" and contains (text(), '5')]`,7);
    I.waitForVisible(`//td[@class="sum" and contains(text(), '0')]`,6);
    I.click(`//*[@id="order_confirmation-wrapper"]/form/div[2]/p/button`);
    I.wait(4);
    I.waitForVisible(`//*[@id="box-order-success"]/h1`);
    I.saveScreenshot(`compleate.jpg`);
    
});
