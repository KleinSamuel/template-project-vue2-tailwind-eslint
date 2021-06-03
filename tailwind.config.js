module.exports = {
    purge: ['./public/index.html', './src/**/*.{vue,js}'],
    darkMode: false,
    theme: {
        extend: {
            width: {
                card_medium: '20rem'
            },
            maxWidth: {
                '200px': '400px',
                '10p': '30%'
            },
            height: {
                '90p': '90%'
            },
            inset: {
                '5p': '5%',
                '10p': '10%',
                '15p': '25%',
                '20p': '20%'
            },
            marginLeft: {
                '10p': '10%'
            },
            borderRadius: {
                nav: '30px',
                card: '12px'
            },
            fontSize: {
                card_header: '1.1rem',
                info_message: '0.7rem',
                in_info: '0.7rem'
            },
            colors: {
                tablet_bg_1: '#338CEC',
                tablet_bg_2: '#0F4680',
            },
            fontFamily: {
                'nunito-regular': ['NunitoSans-Regular'],
                'nunito-light': ['NunitoSans-Light']
            },
            zIndex: {
                '-1': '-1',
                9: '9',
                10: '10',
                11: '11',
                12: '12',
                13: '13',
                14: '14',
                15: '15',
                16: '16',
                17: '17',
                18: '18',
                19: '19',
                20: '20',
                29: '29',
                30: '30',
                navbar: '99',
                front: '100'
            }
        }
    },
    variants: {
        extend: {}
    }
}
