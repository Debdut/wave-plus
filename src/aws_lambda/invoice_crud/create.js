const AWS = require('aws-sdk')

const dynamodb = new AWS.DynamoDB({})
const s3 = new AWS.S3()

const TableName = process.env.tableName.toString()

exports.handler = async (event, context, callback) => {  

  return (await insertIntoTable((snap)))
};

function insertIntoTable(item) {
  return new Promise ((resolve, reject) => {
      const params = {
          Item: AWS.DynamoDB.Converter.marshall(item),
          TableName
       }
      console.log(params)
      dynamodb.putItem(params, (err, data) => {
          if (err) {
              reject(err)
          }
          resolve(data)
      })
  })
}