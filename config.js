const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://<username>:<password>@cluster0.1uqq1o4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/colomb";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "212 680-683567" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "212 680-683567,212 680-683567";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,212 680-683567";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "212 680-683567,212 680-683567";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||"SUHAIL_13_08_03_25_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiU0EzNlA0RVFpOEFxSVZtQk5kaFZTR251aWRsT3dBWlQvWG5CaWNYUWZXQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInlMMXgxRnNzYURzZDF0eFl4N0c2Yjk0a1dYVUFDc3RML25OUEx3L2oxaWs9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiYVBOUDBNTG1QMzlyTEhEV1RzMjJwK1pZbVRZNG9wTHhQRFdscHlhN1RVOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImNGTXNsOEYyTUVyUndNc3Fib3dzUFJzQlZLNi82ZjRKY0ltSnE5YmF6QUE9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiYUkyRUJwWG9oWi9lOEFiaXFyUm5leVdzQnRFTFMzaTEzb2xCWlBvRGdtUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInd3N2s4Ulhna21qWVVVd0x1ZklZUTVaMHVJNTNnWVQzalBoYVdmZXFjbG89XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJTSFVlY2k5ZGhYL0lDeXQvazBEZXJTODJ3MlhJQWlWSkx4YWJUZGdYbW1RPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQ0Z3clE3VHMraGlPbml0b1AreEx4L1MwZ290Rm5mOHhmSnVwdHNiRVNnOD1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJxaFZQTzN1RVNZMmhTbVQ0NVowR1V2NVJuRjFqVk8rU3ZlaXlIN1ErYk0zcDUyR1dvcXlVcTZjUC9SL2YrUm9XQUZ2Nm1RbUo4ZDdJc0tmUENDWUVnZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjI3LFwiYWR2U2VjcmV0S2V5XCI6XCJNTnd3Y1ZBT1Y5dmt3Q0VjK0ZCbkN1S1JmMWFWMjliZ0JBUTBxaUx0bGVBPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiUjh0eTVMLW5TaWVyWUtaWVBUTEtaQVwiLFwicGhvbmVJZFwiOlwiYjJiMjRlNjAtMTcxYi00ZDM5LTlmOGMtZDU3YTM1ZWQ0NWNmXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJwbXQ4NFZ4VllDaVE2eHJUdHArRjI4UjhXVkk9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlRkbDdPY2QyVUFxSEFnWi84TStTUm8rVkJNND1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDSTdybEp3REVLanVoYkFHR0FZZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcImNzLzZnZ3diQk5JV2YwcklRem02RFc5WUxrZUNLSkVpczlabWVrZWZNRVk9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJQY1lGbSsvRC9Za2Z3dldjbjhrdUZMbDB5ZUduSFcrYmJWeVhaNXZTcVVaS1ZsclAwYUZrWXBaZmlxSVA1NE9odnNId1ZzbGxTMTJXU1p6b01XZjJDUT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcImJ1QlBkdTY0MlM4VE5yNHE4NDJ6cExnMkFoU1llUXlzL05uYUtlbzFmOVE5bEZCZVlwVFoyR3V1dlJtWms4NGZRWGVpUTZzZDZqa0c0TGovOFZScWdBPT1cIn0sXCJtZVwiOntcImlkXCI6XCIyMTI2ODA2ODM1Njc6MjFAcy53aGF0c2FwcC5uZXRcIixcIm5hbWVcIjpcItil2LPaqtmA2YDNoNin2YbZgNmI4KKqIPCdmofhr6TMuOOFpOOFpOOFpOKBqVwiLFwibGlkXCI6XCI5NDI3NDk1MTYwNjM5NToyMUBsaWRcIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyMTI2ODA2ODM1Njc6MjFAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCWExQK29JTUd3VFNGbjlLeUVNNXVnMXZXQzVIZ2lpUklyUFdabnBIbnpCR1wifX1dLFwicGxhdGZvcm1cIjpcInNtYmFcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTEzNzIwNzYsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBRFFjXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRFFhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiODVYZHR4Y0k3T3Y4RlF2Q2orOFUwSCsvTTVzOVl1UE4wR3lwU1hjeG10OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NjQzNjgwMTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURRYi5qc29uIjogIntcImtleURhdGFcIjpcIkZRSWp3S1pTVkpMdjcxajkvNm8rd05tcWZrNTI1dFRFR1JiblVMalpTMDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODY0MzY4MDEzLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEUWMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXeCsxUW5VUExKc1RzekNQc09ubVo3VmZJYXZDSzMvWThmZFV1Ymlpcm9vPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg2NDM2ODAxMyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRFFkLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVTFkMkxoZW9VWHZ4N0Jxem5PUkJpVDAyd1M1MXRrVVBCYlR5K2V1UGhYND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NjQzNjgwMTMsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTEzMDk4MzM5NjZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEUWUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXTDB2akMyY0FqVitQM0hVZ1h4SFlaQVNwSHNjdWgyanc3QStWLzNXMW5jPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg2NDM2ODAxNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRFFmLmpzb24iOiAie1wia2V5RGF0YVwiOlwid2F0QzdQSkVBZUUxTGRDajVveFkyc2JZSlEwR0NOWFFTeHU1V0FpR0ZpWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NjQzNjgwMTQsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURRZy5qc29uIjogIntcImtleURhdGFcIjpcIjc5TDhhenBXdGloanVNMHFCbTltQXpkNCtNQjRZdjArbDNSaEp3a3VnR009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODY0MzY4MDE0LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEUWguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5WGhXTFk5bXJjVGxKelZKSXU5YlpLYjRSM0ZzWWtyS2VHdGhCQ0hWcVpZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg2NDM2ODAxNCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRFFpLmpzb24iOiAie1wia2V5RGF0YVwiOlwiS2svRzlNYUlycmkrZlQxcGlOUXllUzhKT1BpUUpFSWJqSkdlRm1CUXl5OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NjQzNjgwMTQsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDVdfSxcInRpbWVzdGFtcFwiOlwiMTcxMTM3MjA0NDMzMlwifSIKfQ=="
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "ckushan" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "dark shan,
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "dark shan",
  ownername:process.env.OWNER_NAME|| "ABDO ISCANO ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
