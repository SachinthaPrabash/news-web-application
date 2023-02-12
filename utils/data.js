import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: 'admin',
            email: "admin@gmail.com",
            password: bcrypt.hashSync('12345'),
            isAdmin: true
        },
        {
            name: 'user',
            email: "user@gmail.com",
            password: bcrypt.hashSync('12345'),
            isAdmin: false
        }

    ],
    news: [
        {
            heading: 'IMF insists on creditor assurances to unlock $2.9 Bn Sri Lanka bailout',
            slug: 'IMF insists on creditor assurances to unlock $2.9 Bn Sri Lanka bailout',
            discription: "The International Monetary Fund said its approval for a $2.9 billion loan to bail out crisis-riddled Sri Lanka will depend on the island nation securing assurances on debt relief from its bilateral creditors.“Sri Lanka continues to engage with official bilateral creditors to obtain financing assurances and also continues to advance domestic reforms,” an IMF spokesperson said in a statement on the progress of its Extended Fund Facility to the South Asian nation.“As soon as adequate assurances are obtained and remaining requirements are met, including by the Sri Lankan authorities, the EFF arrangement for Sri Lanka can be presented to the IMF’s Executive Board for approval.”",
            imgUrl: '/images/1675999466-International-Monetary-Fund--UN-financial-agency-L.jpg'
        },
        {
            heading: 'IMF insists on creditor assurances to unlock $2.9 Bn Sri Lanka bailout',
            slug: 'IMF insists on creditor assurances to unlock $2.9 Bn Sri Lanka bailout',
            discription: 'The International Monetary Fund said its approval for a $2.9 billion loan to bail out crisis-riddled Sri Lanka will depend on the island nation securing assurances on debt relief from its bilateral creditors.“Sri Lanka continues to engage with official bilateral creditors to obtain financing assurances and also continues to advance domestic reforms,” an IMF spokesperson said in a statement on the progress of its Extended Fund Facility to the South Asian nation.“As soon as adequate assurances are obtained and remaining requirements are met, including by the Sri Lankan authorities, the EFF arrangement for Sri Lanka can be presented to the IMF’s Executive Board for approval.”',
            imgUrl: '/images/1675999466-International-Monetary-Fund--UN-financial-agency-L.jpg'
        },
        {
            heading: 'IMF insists on creditor assurances to unlock $2.9 Bn Sri Lanka bailout',
            slug: 'IMF insists on creditor assurances to unlock $2.9 Bn Sri Lanka bailout',
            discription: 'The International Monetary Fund said its approval for a $2.9 billion loan to bail out crisis-riddled Sri Lanka will depend on the island nation securing assurances on debt relief from its bilateral creditors.“Sri Lanka continues to engage with official bilateral creditors to obtain financing assurances and also continues to advance domestic reforms,” an IMF spokesperson said in a statement on the progress of its Extended Fund Facility to the South Asian nation.“As soon as adequate assurances are obtained and remaining requirements are met, including by the Sri Lankan authorities, the EFF arrangement for Sri Lanka can be presented to the IMF’s Executive Board for approval.”',
            imgUrl: '/images/1675999466-International-Monetary-Fund--UN-financial-agency-L.jpg'
        },
        {
            heading: 'IMF insists on creditor assurances to unlock $2.9 Bn Sri Lanka bailout',
            slug: 'IMF insists on creditor assurances to unlock $2.9 Bn Sri Lanka bailout',
            discription: 'The International Monetary Fund said its approval for a $2.9 billion loan to bail out crisis-riddled Sri Lanka will depend on the island nation securing assurances on debt relief from its bilateral creditors.“Sri Lanka continues to engage with official bilateral creditors to obtain financing assurances and also continues to advance domestic reforms,” an IMF spokesperson said in a statement on the progress of its Extended Fund Facility to the South Asian nation.“As soon as adequate assurances are obtained and remaining requirements are met, including by the Sri Lankan authorities, the EFF arrangement for Sri Lanka can be presented to the IMF’s Executive Board for approval.”',
            imgUrl: '/images/1675999466-International-Monetary-Fund--UN-financial-agency-L.jpg'
        },
        {
            heading: 'IMF insists on creditor assurances to unlock $2.9 Bn Sri Lanka bailout',
            slug: 'IMF insists on creditor assurances to unlock $2.9 Bn Sri Lanka bailout',
            discription: 'The International Monetary Fund said its approval for a $2.9 billion loan to bail out crisis-riddled Sri Lanka will depend on the island nation securing assurances on debt relief from its bilateral creditors.“Sri Lanka continues to engage with official bilateral creditors to obtain financing assurances and also continues to advance domestic reforms,” an IMF spokesperson said in a statement on the progress of its Extended Fund Facility to the South Asian nation.“As soon as adequate assurances are obtained and remaining requirements are met, including by the Sri Lankan authorities, the EFF arrangement for Sri Lanka can be presented to the IMF’s Executive Board for approval.”',
            imgUrl: '/images/1675999466-International-Monetary-Fund--UN-financial-agency-L.jpg'
        }
    ]
}
export default data