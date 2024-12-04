import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'sa-east-1_LVFqc7bh7', //'SEU_USER_POOL_ID',
    ClientId: '598oebvh4vfek6thhgf713bpaq' //'SEU_CLIENT_ID'
};

export default new CognitoUserPool(poolData);