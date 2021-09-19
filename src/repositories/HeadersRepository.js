export default class HeadersRepository {

    getHeaderPagesDetails(){
        const headersData = [
            {
                label: "About Us",
                href: "/about",
            },
            {
                label: "View All Customers",
                href: "/customers",
            },
            {
                label: "Transfer Money",
                href: "/transfer",
            },
            {
                label: "Complaints",
                href: "/complaints",
            },
        ];
        return headersData;
    }    
}
