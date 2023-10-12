import AWS from "aws-sdk";

export const handler = async (event, context) => {
    const docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
        TableName: 'info-user-blockchain',
        Item: {
            Iduser: event.idType + event.id,
            id: event.id,
            idType: event.idType,
            name: event.name,
            ecosystem: event.ecosystem,
            rol: event.rol,
            email: event.email,
            wallet: event.wallet,
        },
    };
        try {
            await docClient.put(params).promise();
            return {
                statusCode: 200,
                body: JSON.stringify(params.Item),
            }
        } catch (error) {
            throw new Error(error)
        }
};
