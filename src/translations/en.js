import image from 'image.jpeg';

const tw = {
    download: 'Download',
    cvData: {
        personalData: {
            name: '施凱中 Kai',
            title: 'Senior Frontend Developer',
            image: image,
            contacts: [
                { type: 'email', value: 'rxhivzero@gmail.com' },
                { type: 'phone', value: '0955506959' },
                { type: 'location', value: 'Taipei' },
                { type: 'github', value: 'https://github.com/rxhivzero' },
                { type: 'download', value: 'https://reurl.cc/dXdY3V' },
                // { type: 'website', value: 'https://github.com/rxhivzero' },
                // { type: 'linkedin', value: 'linkedin.com/in/notexists' },
                // { type: 'twitter', value: 'twitter.com/404' },
            ],
        },
        sections: [
            {
                type: 'text',
                title: 'Profile',
                content: 'React, React Native, Node.js\n Front-end Web, Mobile App development',
                icon: 'usertie',
            },
            {
                type: 'experiences-list',
                title: 'Experiences',
                description: '',
                icon: 'archive',
                items: [
                    {
                        title: 'Senior Frontend Developer',
                        company: '安璞資訊 Amber NetWork',
                        companyWebSite: 'http://www.ambernet.com.tw/',
                        companyMeta: '',
                        datesBetween: '2021.02 - 在職',
                        descriptionTags: ['React', 'React Native'],
                        description:
                            'React develop Web、React Native develop App\nmain develop 鳳凰娛樂H5、APP、博貓遊戲APP、CCAV',
                    },
                    {
                        title: 'Frontend Leader',
                        company: 'Teaches趣開課',
                        companyWebSite: 'https://teaches.cc/',
                        companyMeta: '',
                        datesBetween: '2020.03 - 2020.11',
                        descriptionTags: ['React'],
                        description:
                            'Main develop Teaching application platform, online courses, fundraising for users to purchase courses\nIncluding front desk and user management backend',
                    },
                    {
                        title: 'Senior Frontend Developer',
                        company: 'Cofit群健科技',
                        companyWebSite: 'https://events.cofit.me/cofitme',
                        companyMeta: '',
                        datesBetween: '2018.03 - 2020.03',
                        descriptionTags: ['React', 'React Native'],
                        description:
                            'Use React Native develop app and React develop Web\nmain develop health records, instant messages, photos, video communities, e-commerce and other functions\nIncludes Apple, Google dual platform listing, CodePush update',
                    },
                    {
                        title: 'Senior Frontend Developer',
                        company: '邦南國際',
                        companyWebSite: '',
                        companyMeta: '',
                        datesBetween: '2017.03 - 2018.02',
                        descriptionTags: ['React', 'React Native', 'Node.js'],
                        description:
                            'Use React Native develop app and React  develop Web\nmain develop Cambodia Exchange securities, options trading, virtual currency trading and other functions\nInclude stock technical analysis, charts, socket real-time quotes and transactions',
                    },
                    {
                        title: 'Software Developer',
                        company: 'Mitake三竹資訊',
                        companyWebSite: 'https://www.mitake.com.tw/',
                        companyMeta: '',
                        datesBetween: '2015.06 - 2017.02',
                        descriptionTags: ['React', 'Node.js'],
                        description:
                            'Use React  develop Web and node.js develop back-end system, the App part uses Web View\nmain develop functions such as securities, options trading, stock data analysis, etc.',
                    },
                    {
                        title: 'Software Developer',
                        company: 'QNAP威聯通科技',
                        companyWebSite: 'https://www.qnap.com',
                        companyMeta: '',
                        datesBetween: '2014.10 - 2015.05',
                        descriptionTags: ['Angular', 'Node.js'],
                        description:
                            'Use Angular  develop Web and Node.js、PHP develop 後端\nmain develop Nas digital signage system',
                    },
                ],
            },
            {
                type: 'projects-list',
                title: 'Projects list',
                description: 'Online project',
                icon: 'tasks',
                groups: [
                    {
                        sectionHeader: '安璞資訊 Amber NetWork',
                        description: 'React、ReactNative',
                        items: [
                            {
                                title: '鳳凰娛樂H5',
                                projectUrl: 'https://www.maike2020.com/wap/',
                                description: 'React、RN develop Web、APP',
                            },
                            {
                                title: '博貓遊戲APP',
                                projectUrl: 'https://bmnapp.com/',
                                description: 'ReactNative develop APP',
                            },
                            {
                                title: 'CCVA',
                                projectUrl: 'https://app.ccav.co/install',
                                description: 'React、RN develop Web、APP',
                            },
                        ],
                    },
                    {
                        sectionHeader: 'Teaches趣開課',
                        description: 'React、ReactNative',
                        items: [
                            {
                                title: 'Teaches Online teaching platform',
                                projectUrl: 'https://teaches.cc/',
                                description: 'React develop Web',
                            },
                            {
                                title: 'Teaches Online teaching admin platform',
                                projectUrl: 'https://teaches.cc/admin/login',
                                description: 'React develop Web',
                            },
                        ],
                    },
                    {
                        sectionHeader: 'Cofit群健科技',
                        description: 'React、ReactNative',
                        items: [
                            {
                                title: 'Cofit - 我的專屬營養師',
                                projectUrl:
                                    'https://apps.apple.com/tw/app/cofit-%E6%88%91%E7%9A%84%E5%B0%88%E5%B1%AC%E7%87%9F%E9%A4%8A%E5%B8%AB/id1062498342',
                                description: 'ReactNative develop APP',
                            },
                            {
                                title: 'CofitPro - 營養師專用版',
                                projectUrl:
                                    'https://apps.apple.com/tw/app/cofitpro-%E7%87%9F%E9%A4%8A%E5%B8%AB%E5%B0%88%E7%94%A8%E7%89%88/id1081798576',
                                description: 'ReactNative develop APP',
                            },
                            {
                                title: '我的健身工廠 My Fitness Factory',
                                projectUrl:
                                    'https://apps.apple.com/tw/app/%E6%88%91%E7%9A%84%E5%81%A5%E8%BA%AB%E5%B7%A5%E5%BB%A0-my-fitness-factory/id1452984430',
                                description: 'ReactNative develop APP',
                            },
                            {
                                title: 'Social commerce App',
                                projectUrl:
                                    'https://apps.apple.com/cn/app/%E5%AE%89%E6%8D%B7%E8%8E%89%E5%A8%9C/id1479806602',
                                description: 'ReactNative develop APP',
                            },
                        ],
                    },
                    {
                        sectionHeader: 'Mitake三竹資訊',
                        description: 'React、Node',
                        items: [
                            {
                                title: '玉山證券智慧下單',
                                projectUrl:
                                    'https://www.esunsec.com.tw/event/smart-intro/index.html',
                                description: 'React develop WebView',
                            },
                            {
                                title: '永豐證券行動下單',
                                projectUrl: 'https://www.sinotrade.com.tw/ec/20161006/index.html',
                                description: 'React develop WebView',
                            },
                        ],
                    },
                    {
                        sectionHeader: 'QNAP威聯通科技',
                        description: 'Angular、Node',
                        items: [
                            {
                                title: 'QNAP Solution',
                                projectUrl: 'https://www.qnap.com/zh-tw/solution/',
                            },
                        ],
                    },
                ],
            },
            {
                type: 'common-list',
                title: 'Graduation',
                icon: 'graduation',
                items: [
                    {
                        title: 'National Kaohsiung University of Science and Technology',
                        authority: 'Master of Information Management',
                        // authorityWebSite: 'https://sample.edu',
                        rightSide: '2012~2014',
                    },
                    {
                        title: 'National Kaohsiung University of Science and Technology',
                        authority: 'Information Management',
                        // authorityWebSite: 'https://sample.edu',
                        rightSide: '2008~2012',
                    },
                ],
            },
            {
                type: 'tag-list',
                title: 'Main skill',
                icon: 'rocket',
                items: ['React', 'React Native', 'Node.js', 'Javascript', 'TypeScript', 'CSS'],
            },
            // {
            //     type: 'tag-list',
            //     title: 'Hobbies & Interests',
            //     icon: 'comments',
            //     items: ['Photography', 'Poetry'],
            // },
            // {
            //     type: 'common-list',
            //     title: 'Conferences & Certificates',
            //     description: '',
            //     icon: 'comments',
            //     items: [
            //         {
            //             title: 'Some Conferences / 2019',
            //             authority: 'SomeConf',
            //             authorityWebSite: 'https://www.someconf.somesome',
            //         },
            //         {
            //             title: 'Some Conferences / 2019',
            //             authority: 'SomeConf',
            //             authorityMeta: 'Speaker',
            //             authorityWebSite: 'https://www.someconf.somesome',
            //             rightSide: 'test',
            //         },
            //         {
            //             title: 'Some Conferences / 2012',
            //             authorityMeta: 'Speaker',
            //         },
            //     ],
            // },
            {
                type: 'common-list',
                title: 'Awards',
                icon: 'comments',
                items: [
                    {
                        authority: 'App star',
                        authorityMeta: 'TV Live',
                        authorityWebSite: 'https://www.youtube.com/watch?v=MsLMZ4-cP_Q',
                    },
                    {
                        authority: 'TV media news interview reports',
                        authorityMeta: 'Report project',
                    },
                    {
                        authority: 'Imagine 2011 Windows phone 7',
                        authorityMeta: 'Global rematch',
                    },
                    {
                        authority: 'Imagine 2011 Software design group',
                        authorityMeta: 'Taiwan Final',
                    },
                    {
                        authority: '2010第15屆大專院校資訊服務創新競賽-公共服務應用創新組',
                        authorityMeta: 'First',
                    },
                    {
                        authority: '2010第15屆大專院校資訊服務創新競賽-資訊應用組',
                        authorityMeta: '3rd',
                    },
                ],
            },
            {
                type: 'common-list',
                title: 'Language',
                icon: 'language',
                items: [
                    {
                        authority: 'Chinese',
                        authorityMeta: 'Proficient',
                    },
                    {
                        authority: 'English',
                        authorityMeta: 'Medium',
                    },
                ],
            },
        ],
    },
};

export default tw;
