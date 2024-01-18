from selenium import webdriver

chrome_option = webdriver.ChromeOptions()
chrome_option.add_experimental_option("detach",True)
driver = webdriver.Chrome(options=chrome_option)
driver.get("https://www.vocabulary.com/lists/17051")
print(driver.title())
driver.quit()