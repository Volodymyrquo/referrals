import axios from 'axios';

const API = axios.create({baseURL: 'http://ec2-34-208-108-203.us-west-2.compute.amazonaws.com:8091'});

export const END_POINTS =  {
    GET_REFERRALS: '/v1/referrals/referral-codes',
    GENERATE_CODE: '/v1/referrals/referral-codes',
    DELETE_REFERRAL: '/v1/referrals/referral-codes/',
}

const USER_ID = 1000;

// returns list of objects of referrals with code and link
export const getReferralCodes = async () => {
    const response = await API.get(END_POINTS.GET_REFERRALS,  {
    headers: {
    "Content-Type": "application/json",
      'user-id': `${USER_ID}`
    }}).catch(error => {
    console.log(error.response)
 })
    return response;
}; 

// generate a new referrals code, returns an object with code and link
export const generateCode = async (appId) => {
    const response = await API.post(END_POINTS.GENERATE_CODE,  {
      "application_id": `${appId}`,
      }, {
      headers: {
      "Content-Type": "application/json",
        'user-id': `${USER_ID}`
      }}).catch(error => {
    console.log(error.response)
 })
    return response;
}; 

// deletes an object of referrals
export const deleteReferral = async (id) => {
  const response = await API.delete(END_POINTS.DELETE_REFERRAL + `${id}`, 
   {
    headers: {
    "Content-Type": "application/json",
      'user-id': `${USER_ID}`
    }}).catch(error => {
  console.log(error.response)
})
  return response;
}; 



