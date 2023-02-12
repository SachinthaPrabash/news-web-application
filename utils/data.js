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
            heading: 'Sri Lankan woman among victims of earthquake in Turkey',
            slug: 'Sri Lankan woman among victims of earthquake in Turkey',
            discription: 'The body of a 64-year-old Sri Lankan female, who was living in Turkey and reported missing after last week’s earthquake, has been identified by her daughter, the Sri Lankan Embassy in Turkey said.The deceased woman, who had lived in a building that had collapsed in the quake, was not there when the incident occurred and has not been contacted, Ambassador Hasanthi Urugodawatte Dissanayake had told Ada Derana on February 06.',
            imgUrl: '/images/1675999466-International-Monetary-Fund--UN-financial-agency-L.jpg'
        },
        {
            heading: 'AG files revision application with Colombo HC over release of Wasantha Mudalige',
            slug: 'AG files revision application with Colombo HC over release of Wasantha Mudalige',
            discription: 'The Attorney General has filed a revision application before the Colombo High Court seeking the nullification of the order issued by the Colombo Chief Magistrate to release the Inter-University Students’ Federation (IUSF) convenor Wasantha Mudalige from charges under the Prevention of Terrorism Act (PTA).',
            imgUrl: '/images/1675999466-International-Monetary-Fund--UN-financial-agency-L.jpg'
        },
        {
            heading: 'Earthquake death toll tops 28,000, Turkey starts legal action',
            slug: 'Earthquake death toll tops 28,000, Turkey starts legal action',
            discription: 'Rescuers pulled more survivors from rubble on Sunday, six days after one of the worst earthquakes to hit Turkey and Syria, as Turkish authorities sought to maintain order across the disaster zone and started legal action over some building collapses.',
            imgUrl: '/images/1675999466-International-Monetary-Fund--UN-financial-agency-L.jpg'
        },
        {
            heading: 'Over 200 endangered tortoises labelled “dried seafood” seized at BIA',
            slug: 'Over 200 endangered tortoises labelled “dried seafood” seized at BIA',
            discription: 'Sri Lankan customs have seized 206 live star tortoises, which are listed as an endangered species, that were being smuggled to Kuala Lumpur in Malaysia yesterday (Feb. 11) at the Air Cargo Exports Terminal of Bandaranaike International Airport (BIA) in Katunayake.',
            imgUrl: '/images/1675999466-International-Monetary-Fund--UN-financial-agency-L.jpg'
        }
    ]
}
export default data