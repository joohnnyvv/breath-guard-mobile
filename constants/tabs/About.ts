export interface ContactItemData {
    id: string,
    name: string,
    iconName: string,
    link: string
}

export const ContactItemsData: ContactItemData[] = [
    {
        id: '1',
        name: 'Phone',
        iconName: 'phone',
        link: '530036192'
    },
    {
        id: '2',
        name: 'Mail',
        iconName: 'mail-forward',
        link: 'janekrembikowski@gmail.com'
    },
    {
        id: '3',
        name: 'GitHub',
        iconName: 'github',
        link: 'https://github.com/joohnnyvv'
    },
    {
        id: '4',
        name: 'LinkedIn',
        iconName: 'linkedin',
        link: 'https://www.linkedin.com/in/jan-rembikowski/'
    },
]
