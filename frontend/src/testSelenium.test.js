const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert").strict;

var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
require('chromedriver');


test('IngresarProducto', () => {
   let driver = new Builder().forBrowser("chrome").build();
   driver.get("http://localhost:3000/IngresarProducto");

   driver.findElement(By.name("nombre")).sendKeys("Producto Selenium");
   driver.findElement(By.name("codigo")).sendKeys("010101010");
   driver.findElement(By.name("fecha_v")).sendKeys("02-02-2021");
   driver.findElement(By.name("precio")).sendKeys(100.0);
   driver.findElement(By.name("categoria")).sendKeys("Importado");
   driver.findElement(By.name("botonIngresar")).click();
   driver.quit();
})

test('EliminarProducto', () => {
   let driver = new Builder().forBrowser("chrome").build();
   
   driver.get("http://localhost:3000/");
   driver.findElement(By.name("hola4")).then(driver.findElement(By.id("botonDelete")).click());
   driver.navigate().refresh();
   assert(driver.findElement(By.name("hola4")), null);
/*  
   if (driver.findElement(By.name("lala"))){
      fail;
   }
 */  
   driver.quit();
   
})

test('BuscarLogo', () => {
   var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
   driver.get("http://localhost:3000");
   driver.findElement(By.name("Store-T")).click();
   driver.quit();
})