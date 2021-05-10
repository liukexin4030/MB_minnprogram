// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

let userCollection = cloud.database().collection('m_users'); 

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  let userList = await userCollection.get();
  console.log(cloud.DYNAMIC_CURRENT_ENV);
  console.log(userList);
  return {
    userList
  }
}