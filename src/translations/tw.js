import image from 'image.png';

const tw = {
    download: '下載',
    cvData: {
        personalData: {
            name: '施凱中 Kai',
            title: 'Senior Frontend Developer',
            image: image,
            contacts: [
                { type: 'email', value: 'rxhivzero@gmail.com' },
                { type: 'phone', value: '0955506959' },
                { type: 'location', value: '台北市' },
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
                title: '個人簡介',
                content:
                    '擅長javascript、React、React Native、Vue、Flutter、Node.js\n專職前端Web、Mobile App開發',
                icon: 'usertie',
            },
            {
                type: 'experiences-list',
                title: '工作經歷',
                description: '',
                icon: 'archive',
                items: [
                    {
                        title: '資深前端工程師',
                        company: '安璞資訊 Amber NetWork',
                        companyWebSite: '',
                        companyMeta: '',
                        datesBetween: '2021.02 - 2024.11',
                        descriptionTags: ['React', 'React Native', 'Vue', 'Flutter'],
                        description:
                            '使用React開發Web與React Native開發app\n使用Flutter開發多平台應用\n使用Vue開發行銷網頁\n主要開發比特幣錢包、遊戲平台WEB與APP',
                    },
                    {
                        title: '前端主管',
                        company: 'Teaches趣開課',
                        companyWebSite: 'https://teaches.cc/',
                        companyMeta: '',
                        datesBetween: '2020.03 - 2020.11',
                        descriptionTags: ['React', 'Vue'],
                        description:
                            '主要開發教學應用平台、線上開課、募資讓使用者購買課程\n包含前台與使用者管理後台',
                    },
                    {
                        title: '資深前端工程師',
                        company: 'Cofit群健科技',
                        companyWebSite: 'https://events.cofit.me/cofitme',
                        companyMeta: '',
                        datesBetween: '2018.03 - 2020.03',
                        descriptionTags: ['React', 'React Native'],
                        description:
                            '使用React Native開發app與React開發Web\n主要開發健康紀錄、即時訊息、照片、影片社群、電商等功能\n包含Apple、Google雙平台上架、CodePush更新以及微信、綠界等支付前端串接與錯誤處理',
                    },
                    {
                        title: '資深前端工程師',
                        company: '邦南國際',
                        companyWebSite: '',
                        companyMeta: '',
                        datesBetween: '2017.03 - 2018.02',
                        descriptionTags: ['React', 'React Native', 'Node.js'],
                        description:
                            '使用React Native開發app與React 開發Web\n主要開發柬埔寨交易所證券、期權交易、虛擬貨幣交易等功能\n包含股票技術分析、圖表、socket即時報價與交易',
                    },
                    {
                        title: '軟體研發工程師',
                        company: 'Mitake三竹資訊',
                        companyWebSite: 'https://www.mitake.com.tw/',
                        companyMeta: '',
                        datesBetween: '2015.06 - 2017.02',
                        descriptionTags: ['React', 'Node.js'],
                        description:
                            '使用React 開發Web與node.js開發後台系統，App部分使用Web View\n主要開發證券、期權交易、股票資料分析等功能',
                    },
                    {
                        title: '軟體研發工程師',
                        company: 'QNAP威聯通科技',
                        companyWebSite: 'https://www.qnap.com',
                        companyMeta: '',
                        datesBetween: '2014.10 - 2015.05',
                        descriptionTags: ['Angular', 'Node.js'],
                        description:
                            '使用Angular 開發Web與Node.js、PHP開發後端\n主要開發Nas數位看板前後台系統',
                    },
                ],
            },
            {
                type: 'projects-list',
                title: '專案經歷',
                description: '線上專案',
                icon: 'tasks',
                groups: [
                    {
                        sectionHeader: '安璞資訊 Amber NetWork',
                        description: 'React、React Native、Vue、Flutter',
                        items: [
                            {
                                title: 'Ubit比特幣錢包',
                                projectUrl: 'https://ubitme.com/',
                                description: 'Flutter',
                            },
                            {
                                title: '遊戲平台WEB、APP',
                                description: 'React、React Native',
                            },
                        ],
                    },
                    {
                        sectionHeader: 'Teaches趣開課',
                        description: 'React、React Native',
                        items: [
                            {
                                title: 'Teaches趣開課線上教學平台',
                                projectUrl: 'https://teaches.cc/',
                                description: 'React',
                            },
                            {
                                title: 'Teaches 趣開課管理介面',
                                projectUrl: 'https://teaches.cc/admin/login',
                                description: 'React',
                            },
                        ],
                    },
                    {
                        sectionHeader: 'Cofit群健科技',
                        description: 'React Native',
                        items: [
                            {
                                title: 'Cofit - 我的專屬營養師',
                                projectUrl:
                                    'https://apps.apple.com/tw/app/cofit-%E6%88%91%E7%9A%84%E5%B0%88%E5%B1%AC%E7%87%9F%E9%A4%8A%E5%B8%AB/id1062498342',
                                description: 'React Native開發APP，雙平台上架',
                            },
                            {
                                title: 'CofitPro - 營養師專用版',
                                projectUrl:
                                    'https://apps.apple.com/tw/app/cofitpro-%E7%87%9F%E9%A4%8A%E5%B8%AB%E5%B0%88%E7%94%A8%E7%89%88/id1081798576',
                                description: 'React Native開發APP，雙平台上架',
                            },
                            {
                                title: '我的健身工廠 My Fitness Factory',
                                projectUrl:
                                    'https://apps.apple.com/tw/app/%E6%88%91%E7%9A%84%E5%81%A5%E8%BA%AB%E5%B7%A5%E5%BB%A0-my-fitness-factory/id1452984430',
                                description: 'React Native開發APP，雙平台上架',
                            },
                            {
                                title: '社交電商App',
                                projectUrl:
                                    'https://apps.apple.com/cn/app/%E5%AE%89%E6%8D%B7%E8%8E%89%E5%A8%9C/id1479806602',
                                description: 'React Native開發APP，雙平台上架',
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
                                description: 'React',
                            },
                            {
                                title: '永豐證券行動下單',
                                projectUrl: 'https://www.sinotrade.com.tw/ec/20161006/index.html',
                                description: 'React',
                            },
                        ],
                    },
                    {
                        sectionHeader: 'QNAP威聯通科技',
                        description: 'Angular、Node',
                        items: [
                            {
                                title: 'QNAP解決方案產品',
                                projectUrl: 'https://www.qnap.com/zh-tw/solution/',
                            },
                        ],
                    },
                ],
            },
            {
                type: 'common-list',
                title: '學歷',
                icon: 'graduation',
                items: [
                    {
                        title: '國立高雄科技大學',
                        authority: '資管系碩士班',
                        // authorityWebSite: 'https://sample.edu',
                        rightSide: '2012~2014',
                    },
                    {
                        title: '國立高雄科技大學',
                        authority: '資管系',
                        // authorityWebSite: 'https://sample.edu',
                        rightSide: '2008~2012',
                    },
                ],
            },
            {
                type: 'tag-list',
                title: '主要技能',
                icon: 'rocket',
                items: [
                    'React',
                    'React Native',
                    'Vue',
                    'Flutter',
                    'Node.js',
                    'Javascript',
                    'TypeScript',
                ],
            },
            {
                type: 'common-list',
                title: '個人榮譽',
                icon: 'comments',
                items: [
                    {
                        authority: '2010第15屆大專院校資訊服務創新競賽-公共服務應用創新組',
                        authorityMeta: '第一名',
                    },
                    {
                        authority: '2010第15屆大專院校資訊服務創新競賽-資訊應用組',
                        authorityMeta: '第三名',
                    },
                    {
                        authority: 'App star 高手爭霸戰',
                        authorityMeta: '電視決選',
                        authorityWebSite: 'https://www.youtube.com/watch?v=MsLMZ4-cP_Q',
                    },
                    {
                        authority: '數位時代2011年1月刊報導作品',
                        authorityMeta: '報導作品',
                    },
                    {
                        authority: '電視媒體:華視、鳳凰衛視、中天、東森等新聞採訪報導',
                        authorityMeta: '報導作品',
                    },
                    {
                        authority: 'Imagine 2011 微軟潛能創意盃 Windows phone 7設計組',
                        authorityMeta: '入圍全球複賽',
                    },
                    {
                        authority: 'Imagine 2011 微軟潛能創意盃 軟體設計組',
                        authorityMeta: '入圍台灣區決賽',
                    },
                    {
                        authority: '2014企業架構與資訊科技國際研討會',
                        authorityMeta: '使用 SBC 軟體架構整合 MVC 模式之研究',
                    },
                ],
            },
            {
                type: 'common-list',
                title: '語言能力',
                icon: 'language',
                items: [
                    {
                        authority: '中文',
                        authorityMeta: '精通',
                    },
                    {
                        authority: '英文',
                        authorityMeta: '中等',
                    },
                ],
            },
        ],
    },
};

export default tw;
