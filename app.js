// Translation Dictionary
const TRANSLATIONS = {
    en: {
        brand_subtitle: "PREDICTOR & SCHEDULE",
        teams_count: "48 Teams",
        quick_simulate: "⚡ Quick Simulate",
        quick_simulate_title: "Generate random predictions",
        reset: "🔄 Reset",
        reset_title: "Reset to the base approved prediction state",
        clear_all: "🗑️ Clear All",
        clear_all_title: "Clear all predictions to blank",
        export: "📥 Export",
        export_title: "Save predictions to a file",
        import: "📤 Import",
        import_title: "Load predictions from a file",
        tab_matches: "📅 Group Matches",
        tab_standings: "📊 Group Standings",
        tab_bracket: "🪜 Knockout Bracket",
        tab_help: "ℹ️ Rules & Info",
        
        // Filters
        filter_all_groups: "All Groups",
        filter_all_cities: "All Host Cities",
        filter_all_statuses: "All Matches",
        filter_predicted_only: "Predicted Only",
        filter_unpredicted_only: "Unpredicted Only",
        search_placeholder: "Search by team name...",
        
        // Matches
        no_matches_found: "No Matches Found",
        no_matches_desc: "Try adjusting your search query or filters.",
        match_prefix: "Match",
        group_prefix: "Group",
        match_locked: "Locked",
        pin_match: "Pin prediction (keeps it fixed during simulations)",
        unpin_match: "Unpin prediction",
        
        // Standings
        points_table: "Points Table",
        third_places_title: "3rd Place Teams Ranking",
        third_places_desc: "The top 8 third-place teams across all 12 groups advance to the Round of 32. Green rows indicate teams currently qualifying.",
        th_pos: "Pos",
        th_group: "Group",
        th_team: "Team",
        th_p: "P",
        th_w: "W",
        th_d: "D",
        th_l: "L",
        th_gd: "GD",
        th_gf: "GF",
        th_pts: "PTS",
        
        // Bracket
        bracket_instructions: "💡 <strong>Knockout bracket populates dynamically!</strong> Complete predictions in the Group Stage, then enter scores below. Tie matches require entering penalty shootout scores (e.g. 5-4) to determine the advancing team.",
        champion_header: "🏆 CHAMPION",
        crown_champion_desc: "Predict the final winner above to crown the champion.",
        
        // Placeholders
        winner_group: "Winner Group",
        runner_up_group: "Runner-up Group",
        third_place_team: "3rd Place Team",
        winner_match: "Winner Match",
        loser_match: "Loser Match",
        tbd: "TBD",
        
        // Footers
        footer_created: "FIFA World Cup 2026 Schedule & Predictor Tool. Created in 2026.",
        footer_disclaimer: "Disclaimer: Match dates, times, and venue designations are based on official scheduled releases.",
        
        // Timezone labels
        tz_local: "📍 Local Time",
        tz_custom: "⚙️ Custom Zone",
        
        // Alerts
        alert_reset_confirm: "Are you sure you want to reset all your predictions to the base approved prediction state?",
        alert_clear_confirm: "Are you sure you want to clear all your predictions?",
        alert_import_success: "Predictions imported successfully!",
        alert_import_fail: "Invalid file format. Please upload a valid predictions file.",
        alert_read_fail: "Failed to read file. Make sure it is a valid JSON file.",

        // Team names translation maps
        teams: {
            'Mexico': 'Mexico', 'South Africa': 'South Africa', 'Korea Republic': 'Korea Republic', 'Czechia': 'Czechia',
            'Canada': 'Canada', 'Bosnia and Herzegovina': 'Bosnia & Herzegovina', 'Qatar': 'Qatar', 'Switzerland': 'Switzerland',
            'Brazil': 'Brazil', 'Morocco': 'Morocco', 'Haiti': 'Haiti', 'Scotland': 'Scotland',
            'United States': 'United States', 'Paraguay': 'Paraguay', 'Australia': 'Australia', 'Türkiye': 'Türkiye',
            'Germany': 'Germany', 'Curaçao': 'Curaçao', 'Côte d\'Ivoire': 'Côte d\'Ivoire', 'Ecuador': 'Ecuador',
            'Netherlands': 'Netherlands', 'Japan': 'Japan', 'Sweden': 'Sweden', 'Tunisia': 'Tunisia',
            'Belgium': 'Belgium', 'Egypt': 'Egypt', 'IR Iran': 'IR Iran', 'New Zealand': 'New Zealand',
            'Spain': 'Spain', 'Cabo Verde': 'Cabo Verde', 'Saudi Arabia': 'Saudi Arabia', 'Uruguay': 'Uruguay',
            'France': 'France', 'Senegal': 'Senegal', 'Iraq': 'Iraq', 'Norway': 'Norway',
            'Argentina': 'Argentina', 'Algeria': 'Algeria', 'Austria': 'Austria', 'Jordan': 'Jordan',
            'Portugal': 'Portugal', 'Congo DR': 'Congo DR', 'Uzbekistan': 'Uzbekistan', 'Colombia': 'Colombia',
            'England': 'England', 'Croatia': 'Croatia', 'Ghana': 'Ghana', 'Panama': 'Panama'
        },
        
        // Cities translation
        cities: {
            'Vancouver': 'Vancouver', 'Seattle': 'Seattle', 'San Francisco': 'San Francisco', 'Los Angeles': 'Los Angeles',
            'Guadalajara': 'Guadalajara', 'Mexico City': 'Mexico City', 'Monterrey': 'Monterrey', 'Houston': 'Houston',
            'Dallas': 'Dallas', 'Kansas City': 'Kansas City', 'Atlanta': 'Atlanta', 'Miami': 'Miami', 'Boston': 'Boston',
            'New York/New Jersey': 'New York/New Jersey', 'Philadelphia': 'Philadelphia', 'Toronto': 'Toronto'
        },
        
        // Venues translation
        venues: {
            'Estadio Azteca': 'Estadio Azteca', 'Estadio Guadalajara': 'Estadio Guadalajara', 'Mercedes-Benz Stadium': 'Mercedes-Benz Stadium',
            'Estadio Monterrey': 'Estadio Monterrey', 'NRG Stadium': 'NRG Stadium', 'Toronto Stadium': 'Toronto Stadium',
            'San Francisco Bay Area Stadium': 'San Francisco Bay Area Stadium', 'Los Angeles Stadium': 'Los Angeles Stadium',
            'BC Place': 'BC Place', 'Gillette Stadium': 'Gillette Stadium', 'MetLife Stadium': 'MetLife Stadium',
            'Lincoln Financial Field': 'Lincoln Financial Field', 'Lumen Field': 'Lumen Field', 'Arrowhead Stadium': 'Arrowhead Stadium',
            'AT&T Stadium': 'AT&T Stadium', 'Hard Rock Stadium': 'Hard Rock Stadium'
        },
        // Countries translation
        countries: {
            'Canada': 'Canada',
            'Mexico': 'Mexico',
            'United States': 'USA'
        }
    },
    zh: {
        brand_subtitle: "预测与赛程表",
        teams_count: "48 支球队",
        quick_simulate: "⚡ 快速模拟",
        quick_simulate_title: "随机生成比赛预测",
        reset: "🔄 重置",
        reset_title: "重置为官方预设的初始预测状态",
        clear_all: "🗑️ 清空所有",
        clear_all_title: "清空所有预测比分",
        export: "📥 导出",
        export_title: "保存我的预测到 JSON 文件",
        import: "📤 导入",
        import_title: "从 JSON 文件读取我的预测",
        tab_matches: "📅 小组赛程",
        tab_standings: "📊 小组积分榜",
        tab_bracket: "🪜 淘汰赛对阵图",
        tab_help: "ℹ️ 规则与信息",
        
        // Filters
        filter_all_groups: "所有小组",
        filter_all_cities: "所有主办城市",
        filter_all_statuses: "所有比赛",
        filter_predicted_only: "仅显示已预测",
        filter_unpredicted_only: "仅显示未预测",
        search_placeholder: "输入球队名称搜索...",
        
        // Matches
        no_matches_found: "未找到相关比赛",
        no_matches_desc: "请尝试调整您的搜索词或筛选条件。",
        match_prefix: "比赛",
        group_prefix: "小组",
        match_locked: "已结束",
        pin_match: "固定预测比分（模拟时保持不变）",
        unpin_match: "取消固定比分",
        
        // Standings
        points_table: "积分表",
        third_places_title: "小组第三名排名",
        third_places_desc: "在所有 12 个小组中，排名前 8 的第三名球队将晋级 32 强。绿色行表示当前符合晋级条件的球队。",
        th_pos: "排名",
        th_group: "小组",
        th_team: "球队",
        th_p: "场",
        th_w: "胜",
        th_d: "平",
        th_l: "负",
        th_gd: "净胜球",
        th_gf: "进球",
        th_pts: "积分",
        
        // Bracket
        bracket_instructions: "💡 <strong>淘汰赛对阵图自动动态生成！</strong> 在小组赛阶段完成预测，然后下方输入比分。平局比赛需要输入点球大战比分（例如 5-4）以决定晋级球队。",
        champion_header: "🏆 冠军",
        crown_champion_desc: "预测上面的决赛胜者以加冕冠军。",
        
        // Placeholders
        winner_group: "小组第一",
        runner_up_group: "小组第二",
        third_place_team: "第三名球队",
        winner_match: "场胜者",
        loser_match: "场败者",
        tbd: "待定",
        
        // Footers
        footer_created: "2026年国际足联世界杯赛程及预测工具。创建于2026年。",
        footer_disclaimer: "免责声明：比赛日期、时间和场馆指定均基于官方发布的赛程。",
        
        // Timezone labels
        tz_local: "📍 当地时间",
        tz_custom: "⚙️ 自定义时区",
        
        // Alerts
        alert_reset_confirm: "您确定要重置所有预测到预设状态吗？",
        alert_clear_confirm: "您确定要清空所有预测吗？",
        alert_import_success: "预测数据导入成功！",
        alert_import_fail: "无效的文件格式。请上传有效的预测文件。",
        alert_read_fail: "读取文件失败。请确保它是一个合法的 JSON 文件。",
        
        // Team names translation maps
        teams: {
            'Mexico': '墨西哥', 'South Africa': '南非', 'Korea Republic': '韩国', 'Czechia': '捷克',
            'Canada': '加拿大', 'Bosnia and Herzegovina': '波黑', 'Qatar': '卡塔尔', 'Switzerland': '瑞士',
            'Brazil': '巴西', 'Morocco': '摩洛哥', 'Haiti': '海地', 'Scotland': '苏格兰',
            'United States': '美国', 'Paraguay': '巴拉圭', 'Australia': '澳大利亚', 'Türkiye': '土耳其',
            'Germany': '德国', 'Curaçao': '库拉索', 'Côte d\'Ivoire': '科特迪瓦', 'Ecuador': '厄瓜多尔',
            'Netherlands': '荷兰', 'Japan': '日本', 'Sweden': '瑞典', 'Tunisia': '突尼斯',
            'Belgium': '比利时', 'Egypt': '埃及', 'IR Iran': '伊朗', 'New Zealand': '新西兰',
            'Spain': '西班牙', 'Cabo Verde': '佛得角', 'Saudi Arabia': '沙特阿拉伯', 'Uruguay': '乌拉圭',
            'France': '法国', 'Senegal': '塞内加尔', 'Iraq': '伊拉克', 'Norway': '挪威',
            'Argentina': '阿根廷', 'Algeria': '阿尔及利亚', 'Austria': '奥地利', 'Jordan': '约旦',
            'Portugal': '葡萄牙', 'Congo DR': '民主刚果', 'Uzbekistan': '乌兹别克斯坦', 'Colombia': '哥伦比亚',
            'England': '英格兰', 'Croatia': '克罗地亚', 'Ghana': '加纳', 'Panama': '巴拿马'
        },
        
        // Cities translation
        cities: {
            'Vancouver': '温哥华', 'Seattle': '西雅图', 'San Francisco': '旧金山', 'Los Angeles': '洛杉矶',
            'Guadalajara': '瓜达拉哈拉', 'Mexico City': '墨西哥城', 'Monterrey': '蒙特雷', 'Houston': '休斯敦',
            'Dallas': '达拉斯', 'Kansas City': '堪萨斯城', 'Atlanta': '亚特兰大', 'Miami': '迈阿密', 'Boston': '波士顿',
            'New York/New Jersey': '纽约/新泽西', 'Philadelphia': '费城', 'Toronto': '多伦多'
        },
        
        // Venues translation
        venues: {
            'Estadio Azteca': '阿兹特克体育场', 'Estadio Guadalajara': '瓜达拉哈拉体育场', 'Mercedes-Benz Stadium': '梅赛德斯-奔驰体育场',
            'Estadio Monterrey': '蒙特雷体育场', 'NRG Stadium': 'NRG体育场', 'Toronto Stadium': '多伦多体育场',
            'San Francisco Bay Area Stadium': '旧金山湾区体育场', 'Los Angeles Stadium': '洛杉矶体育场',
            'BC Place': 'BC体育场', 'Gillette Stadium': '吉列体育场', 'MetLife Stadium': '大都会人寿体育场',
            'Lincoln Financial Field': '林肯金融球场', 'Lumen Field': '流明球场', 'Arrowhead Stadium': '箭头体育场',
            'AT&T Stadium': 'AT&T体育场', 'Hard Rock Stadium': '硬石体育场'
        },
        // Countries translation
        countries: {
            'Canada': '加拿大',
            'Mexico': '墨西哥',
            'United States': '美国'
        }
    }
};

// Translation Helper
function t(key, category = null) {
    if (category) {
        return TRANSLATIONS[currentLanguage]?.[category]?.[key] || key;
    }
    return TRANSLATIONS[currentLanguage]?.[key] || key;
}

// Team Flags Dictionary
const TEAM_FLAGS = {
    'Mexico': '🇲🇽', 'South Africa': '🇿🇦', 'Korea Republic': '🇰🇷', 'Czechia': '🇨🇿',
    'Canada': '🇨🇦', 'Bosnia and Herzegovina': '🇧🇦', 'Qatar': '🇶🇦', 'Switzerland': '🇨🇭',
    'Brazil': '🇧🇷', 'Morocco': '🇲🇦', 'Haiti': '🇭🇹', 'Scotland': '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    'United States': '🇺🇸', 'Paraguay': '🇵🇾', 'Australia': '🇦🇺', 'Türkiye': '🇹🇷',
    'Germany': '🇩🇪', 'Curaçao': '🇨🇼', 'Côte d\'Ivoire': '🇨🇮', 'Ecuador': '🇪🇨',
    'Netherlands': '🇳🇱', 'Japan': '🇯🇵', 'Sweden': '🇸🇪', 'Tunisia': '🇹🇳',
    'Belgium': '🇧🇪', 'Egypt': '🇪🇬', 'IR Iran': '🇮🇷', 'New Zealand': '🇳🇿',
    'Spain': '🇪🇸', 'Cabo Verde': '🇨🇻', 'Saudi Arabia': '🇸🇦', 'Uruguay': '🇺🇾',
    'France': '🇫🇷', 'Senegal': '🇸🇳', 'Iraq': '🇮🇶', 'Norway': '🇳🇴',
    'Argentina': '🇦🇷', 'Algeria': '🇩🇿', 'Austria': '🇦🇹', 'Jordan': '🇯🇴',
    'Portugal': '🇵🇹', 'Congo DR': '🇨🇩', 'Uzbekistan': '🇺🇿', 'Colombia': '🇨🇴',
    'England': '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Croatia': '🇭🇷', 'Ghana': '🇬🇭', 'Panama': '🇵🇦'
};

// Host Cities Timezones mapping
const CITY_TIMEZONES = {
    'Vancouver': 'America/Vancouver',
    'Seattle': 'America/Los_Angeles',
    'San Francisco': 'America/Los_Angeles',
    'Los Angeles': 'America/Los_Angeles',
    'Guadalajara': 'America/Mexico_City',
    'Mexico City': 'America/Mexico_City',
    'Monterrey': 'America/Monterrey',
    'Houston': 'America/Chicago',
    'Dallas': 'America/Chicago',
    'Kansas City': 'America/Chicago',
    'Atlanta': 'America/New_York',
    'Miami': 'America/New_York',
    'Boston': 'America/New_York',
    'New York/New Jersey': 'America/New_York',
    'Philadelphia': 'America/New_York',
    'Toronto': 'America/Toronto'
};

// Host Cities Countries mapping
const CITY_COUNTRIES = {
    'Vancouver': 'Canada',
    'Toronto': 'Canada',
    'Mexico City': 'Mexico',
    'Guadalajara': 'Mexico',
    'Monterrey': 'Mexico',
    'Seattle': 'United States',
    'San Francisco': 'United States',
    'Los Angeles': 'United States',
    'Houston': 'United States',
    'Dallas': 'United States',
    'Kansas City': 'United States',
    'Atlanta': 'United States',
    'Miami': 'United States',
    'Boston': 'United States',
    'New York/New Jersey': 'United States',
    'Philadelphia': 'United States'
};

// FIFA Rankings mapping (June 2026/Realistic)
const FIFA_RANKINGS = {
    'Argentina': 1, 'France': 2, 'England': 3, 'Belgium': 4, 'Brazil': 5,
    'Portugal': 6, 'Netherlands': 7, 'Spain': 8, 'Croatia': 10, 'Germany': 11,
    'United States': 12, 'Morocco': 13, 'Colombia': 14, 'Uruguay': 15, 'Mexico': 15,
    'Japan': 16, 'Switzerland': 19, 'IR Iran': 20, 'Senegal': 21, 'Korea Republic': 22,
    'Australia': 23, 'Sweden': 24, 'Austria': 25, 'Türkiye': 26, 'Ecuador': 30,
    'Egypt': 31, 'Czechia': 32, 'Qatar': 34, 'Panama': 37, 'Côte d\'Ivoire': 38,
    'Scotland': 39, 'Tunisia': 41, 'Algeria': 44, 'Norway': 47, 'Canada': 49,
    'Saudi Arabia': 53, 'Iraq': 55, 'Paraguay': 56, 'South Africa': 59, 'Uzbekistan': 60,
    'Congo DR': 61, 'Cabo Verde': 65, 'Ghana': 68, 'Jordan': 71, 'Bosnia and Herzegovina': 74,
    'Haiti': 86, 'Curaçao': 90, 'New Zealand': 104
};

// Group Stage Configurations
const GROUPS_TEAMS = {
    A: ['Mexico', 'South Africa', 'Korea Republic', 'Czechia'],
    B: ['Canada', 'Bosnia and Herzegovina', 'Qatar', 'Switzerland'],
    C: ['Brazil', 'Morocco', 'Haiti', 'Scotland'],
    D: ['United States', 'Paraguay', 'Australia', 'Türkiye'],
    E: ['Germany', 'Curaçao', 'Côte d\'Ivoire', 'Ecuador'],
    F: ['Netherlands', 'Japan', 'Sweden', 'Tunisia'],
    G: ['Belgium', 'Egypt', 'IR Iran', 'New Zealand'],
    H: ['Spain', 'Cabo Verde', 'Saudi Arabia', 'Uruguay'],
    I: ['France', 'Senegal', 'Iraq', 'Norway'],
    J: ['Argentina', 'Algeria', 'Austria', 'Jordan'],
    K: ['Portugal', 'Congo DR', 'Uzbekistan', 'Colombia'],
    L: ['England', 'Croatia', 'Ghana', 'Panama']
};

// Complete 72 Group Stage Matches Dataset
const groupMatches = [
    // Group A
    { id: 1, group: 'A', teamA: 'Mexico', flagA: '🇲🇽', teamB: 'South Africa', flagB: '🇿🇦', venue: 'Estadio Azteca', city: 'Mexico City', datetime: '2026-06-11T22:30:00Z' },
    { id: 2, group: 'A', teamA: 'Korea Republic', flagA: '🇰🇷', teamB: 'Czechia', flagB: '🇨🇿', venue: 'Estadio Guadalajara', city: 'Guadalajara', datetime: '2026-06-12T01:30:00Z' },
    { id: 13, group: 'A', teamA: 'Czechia', flagA: '🇨🇿', teamB: 'South Africa', flagB: '🇿🇦', venue: 'Mercedes-Benz Stadium', city: 'Atlanta', datetime: '2026-06-18T19:00:00Z' },
    { id: 14, group: 'A', teamA: 'Mexico', flagA: '🇲🇽', teamB: 'Korea Republic', flagB: '🇰🇷', venue: 'Estadio Guadalajara', city: 'Guadalajara', datetime: '2026-06-18T22:30:00Z' },
    { id: 25, group: 'A', teamA: 'Czechia', flagA: '🇨🇿', teamB: 'Mexico', flagB: '🇲🇽', venue: 'NRG Stadium', city: 'Houston', datetime: '2026-06-24T21:00:00Z' },
    { id: 26, group: 'A', teamA: 'South Africa', flagA: '🇿🇦', teamB: 'Korea Republic', flagB: '🇰🇷', venue: 'Estadio Monterrey', city: 'Monterrey', datetime: '2026-06-24T21:00:00Z' },

    // Group B
    { id: 3, group: 'B', teamA: 'Canada', flagA: '🇨🇦', teamB: 'Bosnia and Herzegovina', flagB: '🇧🇦', venue: 'Toronto Stadium', city: 'Toronto', datetime: '2026-06-12T23:00:00Z' },
    { id: 4, group: 'B', teamA: 'Qatar', flagA: '🇶🇦', teamB: 'Switzerland', flagB: '🇨🇭', venue: 'San Francisco Bay Area Stadium', city: 'San Francisco', datetime: '2026-06-13T22:00:00Z' },
    { id: 15, group: 'B', teamA: 'Switzerland', flagA: '🇨🇭', teamB: 'Bosnia and Herzegovina', flagB: '🇧🇦', venue: 'Los Angeles Stadium', city: 'Los Angeles', datetime: '2026-06-18T22:00:00Z' },
    { id: 16, group: 'B', teamA: 'Canada', flagA: '🇨🇦', teamB: 'Qatar', flagB: '🇶🇦', venue: 'BC Place', city: 'Vancouver', datetime: '2026-06-19T02:00:00Z' },
    { id: 27, group: 'B', teamA: 'Switzerland', flagA: '🇨🇭', teamB: 'Canada', flagB: '🇨🇦', venue: 'BC Place', city: 'Vancouver', datetime: '2026-06-24T21:00:00Z' },
    { id: 28, group: 'B', teamA: 'Bosnia and Herzegovina', flagA: '🇧🇦', teamB: 'Qatar', flagB: '🇶🇦', venue: 'Toronto Stadium', city: 'Toronto', datetime: '2026-06-25T01:00:00Z' },

    // Group C
    { id: 5, group: 'C', teamA: 'Haiti', flagA: '🇭🇹', teamB: 'Scotland', flagB: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', venue: 'Gillette Stadium', city: 'Boston', datetime: '2026-06-13T17:00:00Z' },
    { id: 6, group: 'C', teamA: 'Brazil', flagA: '🇧🇷', teamB: 'Morocco', flagB: '🇲🇦', venue: 'MetLife Stadium', city: 'New York/New Jersey', datetime: '2026-06-13T22:00:00Z' },
    { id: 17, group: 'C', teamA: 'Brazil', flagA: '🇧🇷', teamB: 'Haiti', flagB: '🇭🇹', venue: 'Lincoln Financial Field', city: 'Philadelphia', datetime: '2026-06-19T19:00:00Z' },
    { id: 18, group: 'C', teamA: 'Scotland', flagA: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', teamB: 'Morocco', flagB: '🇲🇦', venue: 'Gillette Stadium', city: 'Boston', datetime: '2026-06-19T23:00:00Z' },
    { id: 29, group: 'C', teamA: 'Scotland', flagA: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', teamB: 'Brazil', flagB: '🇧🇷', venue: 'MetLife Stadium', city: 'New York/New Jersey', datetime: '2026-06-25T22:00:00Z' },
    { id: 30, group: 'C', teamA: 'Morocco', flagA: '🇲🇦', teamB: 'Haiti', flagB: '🇭🇹', venue: 'Gillette Stadium', city: 'Boston', datetime: '2026-06-25T22:00:00Z' },

    // Group D
    { id: 7, group: 'D', teamA: 'United States', flagA: '🇺🇸', teamB: 'Paraguay', flagB: '🇵🇾', venue: 'Los Angeles Stadium', city: 'Los Angeles', datetime: '2026-06-13T02:00:00Z' },
    { id: 8, group: 'D', teamA: 'Australia', flagA: '🇦🇺', teamB: 'Türkiye', flagB: '🇹🇷', venue: 'BC Place', city: 'Vancouver', datetime: '2026-06-13T19:00:00Z' },
    { id: 19, group: 'D', teamA: 'United States', flagA: '🇺🇸', teamB: 'Australia', flagB: '🇦🇺', venue: 'Lumen Field', city: 'Seattle', datetime: '2026-06-20T02:00:00Z' },
    { id: 20, group: 'D', teamA: 'Paraguay', flagA: '🇵🇾', teamB: 'Türkiye', flagB: '🇹🇷', venue: 'San Francisco Bay Area Stadium', city: 'San Francisco', datetime: '2026-06-19T22:00:00Z' },
    { id: 31, group: 'D', teamA: 'Türkiye', flagA: '🇹🇷', teamB: 'United States', flagB: '🇺🇸', venue: 'Los Angeles Stadium', city: 'Los Angeles', datetime: '2026-06-25T22:00:00Z' },
    { id: 32, group: 'D', teamA: 'Paraguay', flagA: '🇵🇾', teamB: 'Australia', flagB: '🇦🇺', venue: 'Lumen Field', city: 'Seattle', datetime: '2026-06-25T22:00:00Z' },

    // Group E
    { id: 9, group: 'E', teamA: 'Côte d\'Ivoire', flagA: '🇨🇮', teamB: 'Ecuador', flagB: '🇪🇨', venue: 'Lincoln Financial Field', city: 'Philadelphia', datetime: '2026-06-14T17:00:00Z' },
    { id: 10, group: 'E', teamA: 'Germany', flagA: '🇩🇪', teamB: 'Curaçao', flagB: '🇨🇼', venue: 'NRG Stadium', city: 'Houston', datetime: '2026-06-14T22:00:00Z' },
    { id: 21, group: 'E', teamA: 'Curaçao', flagA: '🇨🇼', teamB: 'Ecuador', flagB: '🇪🇨', venue: 'Arrowhead Stadium', city: 'Kansas City', datetime: '2026-06-20T19:00:00Z' },
    { id: 22, group: 'E', teamA: 'Germany', flagA: '🇩🇪', teamB: 'Côte d\'Ivoire', flagB: '🇨🇮', venue: 'AT&T Stadium', city: 'Dallas', datetime: '2026-06-20T23:00:00Z' },
    { id: 33, group: 'E', teamA: 'Ecuador', flagA: '🇪🇨', teamB: 'Germany', flagB: '🇩🇪', venue: 'AT&T Stadium', city: 'Dallas', datetime: '2026-06-26T22:00:00Z' },
    { id: 34, group: 'E', teamA: 'Curaçao', flagA: '🇨🇼', teamB: 'Côte d\'Ivoire', flagB: '🇨🇮', venue: 'NRG Stadium', city: 'Houston', datetime: '2026-06-26T22:00:00Z' },

    // Group F
    { id: 11, group: 'F', teamA: 'Netherlands', flagA: '🇳🇱', teamB: 'Japan', flagB: '🇯🇵', venue: 'AT&T Stadium', city: 'Dallas', datetime: '2026-06-14T19:00:00Z' },
    { id: 12, group: 'F', teamA: 'Sweden', flagA: '🇸🇪', teamB: 'Tunisia', flagB: '🇹🇳', venue: 'Estadio Monterrey', city: 'Monterrey', datetime: '2026-06-14T23:00:00Z' },
    { id: 23, group: 'F', teamA: 'Tunisia', flagA: '🇹🇳', teamB: 'Japan', flagB: '🇯🇵', venue: 'Hard Rock Stadium', city: 'Miami', datetime: '2026-06-20T19:00:00Z' },
    { id: 24, group: 'F', teamA: 'Sweden', flagA: '🇸🇪', teamB: 'Netherlands', flagB: '🇳🇱', venue: 'Mercedes-Benz Stadium', city: 'Atlanta', datetime: '2026-06-20T23:00:00Z' },
    { id: 35, group: 'F', teamA: 'Japan', flagA: '🇯🇵', teamB: 'Sweden', flagB: '🇸🇪', venue: 'MetLife Stadium', city: 'New York/New Jersey', datetime: '2026-06-26T22:00:00Z' },
    { id: 36, group: 'F', teamA: 'Tunisia', flagA: '🇹🇳', teamB: 'Netherlands', flagB: '🇳🇱', venue: 'Gillette Stadium', city: 'Boston', datetime: '2026-06-26T22:00:00Z' },

    // Group G
    { id: 37, group: 'G', teamA: 'IR Iran', flagA: '🇮🇷', teamB: 'New Zealand', flagB: '🇳🇿', venue: 'Los Angeles Stadium', city: 'Los Angeles', datetime: '2026-06-15T22:00:00Z' },
    { id: 38, group: 'G', teamA: 'Belgium', flagA: '🇧🇪', teamB: 'Egypt', flagB: '🇪🇬', venue: 'Lumen Field', city: 'Seattle', datetime: '2026-06-16T02:00:00Z' },
    { id: 43, group: 'G', teamA: 'Egypt', flagA: '🇪🇬', teamB: 'New Zealand', flagB: '🇳🇿', venue: 'San Francisco Bay Area Stadium', city: 'San Francisco', datetime: '2026-06-21T22:00:00Z' },
    { id: 44, group: 'G', teamA: 'Belgium', flagA: '🇧🇪', teamB: 'IR Iran', flagB: '🇮🇷', venue: 'Los Angeles Stadium', city: 'Los Angeles', datetime: '2026-06-22T02:00:00Z' },
    { id: 49, group: 'G', teamA: 'New Zealand', flagA: '🇳🇿', teamB: 'Belgium', flagB: '🇧🇪', venue: 'Lumen Field', city: 'Seattle', datetime: '2026-06-27T21:00:00Z' },
    { id: 50, group: 'G', teamA: 'Egypt', flagA: '🇪🇬', teamB: 'IR Iran', flagB: '🇮🇷', venue: 'San Francisco Bay Area Stadium', city: 'San Francisco', datetime: '2026-06-27T21:00:00Z' },

    // Group H
    { id: 39, group: 'H', teamA: 'Saudi Arabia', flagA: '🇸🇦', teamB: 'Uruguay', flagB: '🇺🇾', venue: 'Hard Rock Stadium', city: 'Miami', datetime: '2026-06-15T19:00:00Z' },
    { id: 40, group: 'H', teamA: 'Spain', flagA: '🇪🇸', teamB: 'Cabo Verde', flagB: '🇨🇻', venue: 'Mercedes-Benz Stadium', city: 'Atlanta', datetime: '2026-06-15T23:00:00Z' },
    { id: 45, group: 'H', teamA: 'Cabo Verde', flagA: '🇨🇻', teamB: 'Uruguay', flagB: '🇺🇾', venue: 'Gillette Stadium', city: 'Boston', datetime: '2026-06-21T19:00:00Z' },
    { id: 46, group: 'H', teamA: 'Spain', flagA: '🇪🇸', teamB: 'Saudi Arabia', flagB: '🇸🇦', venue: 'Lincoln Financial Field', city: 'Philadelphia', datetime: '2026-06-21T23:00:00Z' },
    { id: 51, group: 'H', teamA: 'Uruguay', flagA: '🇺🇾', teamB: 'Spain', flagB: '🇪🇸', venue: 'Hard Rock Stadium', city: 'Miami', datetime: '2026-06-27T21:00:00Z' },
    { id: 52, group: 'H', teamA: 'Cabo Verde', flagA: '🇨🇻', teamB: 'Saudi Arabia', flagB: '🇸🇦', venue: 'Mercedes-Benz Stadium', city: 'Atlanta', datetime: '2026-06-27T21:00:00Z' },

    // Group I
    { id: 41, group: 'I', teamA: 'France', flagA: '🇫🇷', teamB: 'Senegal', flagB: '🇸🇳', venue: 'MetLife Stadium', city: 'New York/New Jersey', datetime: '2026-06-16T19:00:00Z' },
    { id: 42, group: 'I', teamA: 'Iraq', flagA: '🇮🇶', teamB: 'Norway', flagB: '🇳🇴', venue: 'Gillette Stadium', city: 'Boston', datetime: '2026-06-16T23:00:00Z' },
    { id: 47, group: 'I', teamA: 'Norway', flagA: '🇳🇴', teamB: 'Senegal', flagB: '🇸🇳', venue: 'Lincoln Financial Field', city: 'Philadelphia', datetime: '2026-06-22T19:00:00Z' },
    { id: 48, group: 'I', teamA: 'France', flagA: '🇫🇷', teamB: 'Iraq', flagB: '🇮🇶', venue: 'MetLife Stadium', city: 'New York/New Jersey', datetime: '2026-06-22T23:00:00Z' },
    { id: 53, group: 'I', teamA: 'Senegal', flagA: '🇸🇳', teamB: 'Iraq', flagB: '🇮🇶', venue: 'MetLife Stadium', city: 'New York/New Jersey', datetime: '2026-06-28T01:00:00Z' },
    { id: 54, group: 'I', teamA: 'Norway', flagA: '🇳🇴', teamB: 'France', flagB: '🇫🇷', venue: 'Gillette Stadium', city: 'Boston', datetime: '2026-06-28T01:00:00Z' },

    // Group J
    { id: 55, group: 'J', teamA: 'Argentina', flagA: '🇦🇷', teamB: 'Algeria', flagB: '🇩🇿', venue: 'Arrowhead Stadium', city: 'Kansas City', datetime: '2026-06-16T23:00:00Z' },
    { id: 56, group: 'J', teamA: 'Austria', flagA: '🇦🇹', teamB: 'Jordan', flagB: '🇯🇴', venue: 'San Francisco Bay Area Stadium', city: 'San Francisco', datetime: '2026-06-17T22:00:00Z' },
    { id: 57, group: 'J', teamA: 'Jordan', flagA: '🇯🇴', teamB: 'Algeria', flagB: '🇩🇿', venue: 'AT&T Stadium', city: 'Dallas', datetime: '2026-06-22T20:00:00Z' },
    { id: 58, group: 'J', teamA: 'Austria', flagA: '🇦🇹', teamB: 'Argentina', flagB: '🇦🇷', venue: 'NRG Stadium', city: 'Houston', datetime: '2026-06-23T00:00:00Z' },
    { id: 59, group: 'J', teamA: 'Algeria', flagA: '🇩🇿', teamB: 'Austria', flagB: '🇦🇹', venue: 'Arrowhead Stadium', city: 'Kansas City', datetime: '2026-06-28T01:00:00Z' },
    { id: 60, group: 'J', teamA: 'Jordan', flagA: '🇯🇴', teamB: 'Argentina', flagB: '🇦🇷', venue: 'AT&T Stadium', city: 'Dallas', datetime: '2026-06-28T01:00:00Z' },

    // Group K
    { id: 61, group: 'K', teamA: 'Portugal', flagA: '🇵🇹', teamB: 'Congo DR', flagB: '🇨🇩', venue: 'Mercedes-Benz Stadium', city: 'Atlanta', datetime: '2026-06-17T19:00:00Z' },
    { id: 62, group: 'K', teamA: 'Uzbekistan', flagA: '🇺🇿', teamB: 'Colombia', flagB: '🇨🇴', venue: 'Hard Rock Stadium', city: 'Miami', datetime: '2026-06-17T23:00:00Z' },
    { id: 63, group: 'K', teamA: 'Colombia', flagA: '🇨🇴', teamB: 'Congo DR', flagB: '🇨🇩', venue: 'NRG Stadium', city: 'Houston', datetime: '2026-06-23T20:00:00Z' },
    { id: 64, group: 'K', teamA: 'Uzbekistan', flagA: '🇺🇿', teamB: 'Portugal', flagB: '🇵🇹', venue: 'AT&T Stadium', city: 'Dallas', datetime: '2026-06-24T00:00:00Z' },
    { id: 65, group: 'K', teamA: 'Congo DR', flagA: '🇨🇩', teamB: 'Uzbekistan', flagB: '🇺🇿', venue: 'Hard Rock Stadium', city: 'Miami', datetime: '2026-06-28T01:00:00Z' },
    { id: 66, group: 'K', teamA: 'Colombia', flagA: '🇨🇴', teamB: 'Portugal', flagB: '🇵🇹', venue: 'Mercedes-Benz Stadium', city: 'Atlanta', datetime: '2026-06-28T01:00:00Z' },

    // Group L
    { id: 67, group: 'L', teamA: 'England', flagA: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', teamB: 'Croatia', flagB: '🇭🇷', venue: 'AT&T Stadium', city: 'Dallas', datetime: '2026-06-17T22:00:00Z' },
    { id: 68, group: 'L', teamA: 'Ghana', flagA: '🇬🇭', teamB: 'Panama', flagB: '🇵🇦', venue: 'Estadio Monterrey', city: 'Monterrey', datetime: '2026-06-18T02:00:00Z' },
    { id: 69, group: 'L', teamA: 'Panama', flagA: '🇵🇦', teamB: 'Croatia', flagB: '🇭🇷', venue: 'Arrowhead Stadium', city: 'Kansas City', datetime: '2026-06-23T22:00:00Z' },
    { id: 70, group: 'L', teamA: 'Ghana', flagA: '🇬🇭', teamB: 'England', flagB: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', venue: 'Gillette Stadium', city: 'Boston', datetime: '2026-06-24T01:00:00Z' },
    { id: 71, group: 'L', teamA: 'Croatia', flagA: '🇭🇷', teamB: 'Ghana', flagB: '🇬🇭', venue: 'MetLife Stadium', city: 'New York/New Jersey', datetime: '2026-06-28T01:00:00Z' },
    { id: 72, group: 'L', teamA: 'Panama', flagA: '🇵🇦', teamB: 'England', flagB: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', venue: 'Lincoln Financial Field', city: 'Philadelphia', datetime: '2026-06-28T01:00:00Z' }
];

// Knockout Bracket Definition (32 matches total)
const knockoutMatches = [
    // Round of 32 (16 matches)
    { id: 'KO1', round: 'Round of 32', label: 'Match 73', type: 'r32', sourceA: { type: 'winner', group: 'A' }, sourceB: { type: 'third', index: 7 }, venue: 'Gillette Stadium', city: 'Boston', datetime: '2026-06-30T17:00:00Z' },
    { id: 'KO2', round: 'Round of 32', label: 'Match 74', type: 'r32', sourceA: { type: 'runnerup', group: 'B' }, sourceB: { type: 'runnerup', group: 'F' }, venue: 'AT&T Stadium', city: 'Dallas', datetime: '2026-06-30T21:00:00Z' },
    { id: 'KO3', round: 'Round of 32', label: 'Match 75', type: 'r32', sourceA: { type: 'winner', group: 'C' }, sourceB: { type: 'third', index: 6 }, venue: 'MetLife Stadium', city: 'New York/New Jersey', datetime: '2026-07-01T17:00:00Z' },
    { id: 'KO4', round: 'Round of 32', label: 'Match 76', type: 'r32', sourceA: { type: 'winner', group: 'D' }, sourceB: { type: 'runnerup', group: 'H' }, venue: 'NRG Stadium', city: 'Houston', datetime: '2026-07-01T21:00:00Z' },
    { id: 'KO5', round: 'Round of 32', label: 'Match 77', type: 'r32', sourceA: { type: 'winner', group: 'E' }, sourceB: { type: 'third', index: 5 }, venue: 'Arrowhead Stadium', city: 'Kansas City', datetime: '2026-07-02T17:00:00Z' },
    { id: 'KO6', round: 'Round of 32', label: 'Match 78', type: 'r32', sourceA: { type: 'runnerup', group: 'A' }, sourceB: { type: 'runnerup', group: 'C' }, venue: 'Los Angeles Stadium', city: 'Los Angeles', datetime: '2026-07-02T21:00:00Z' },
    { id: 'KO7', round: 'Round of 32', label: 'Match 79', type: 'r32', sourceA: { type: 'winner', group: 'F' }, sourceB: { type: 'third', index: 4 }, venue: 'Hard Rock Stadium', city: 'Miami', datetime: '2026-07-03T17:00:00Z' },
    { id: 'KO8', round: 'Round of 32', label: 'Match 80', type: 'r32', sourceA: { type: 'winner', group: 'G' }, sourceB: { type: 'runnerup', group: 'I' }, venue: 'Mercedes-Benz Stadium', city: 'Atlanta', datetime: '2026-07-03T21:00:00Z' },
    { id: 'KO9', round: 'Round of 32', label: 'Match 81', type: 'r32', sourceA: { type: 'winner', group: 'H' }, sourceB: { type: 'third', index: 3 }, venue: 'Lincoln Financial Field', city: 'Philadelphia', datetime: '2026-07-04T17:00:00Z' },
    { id: 'KO10', round: 'Round of 32', label: 'Match 82', type: 'r32', sourceA: { type: 'runnerup', group: 'D' }, sourceB: { type: 'runnerup', group: 'G' }, venue: 'Lumen Field', city: 'Seattle', datetime: '2026-07-04T21:00:00Z' },
    { id: 'KO11', round: 'Round of 32', label: 'Match 83', type: 'r32', sourceA: { type: 'winner', group: 'I' }, sourceB: { type: 'third', index: 2 }, venue: 'Toronto Stadium', city: 'Toronto', datetime: '2026-07-05T17:00:00Z' },
    { id: 'KO12', round: 'Round of 32', label: 'Match 84', type: 'r32', sourceA: { type: 'winner', group: 'J' }, sourceB: { type: 'runnerup', group: 'L' }, venue: 'San Francisco Bay Area Stadium', city: 'San Francisco', datetime: '2026-07-05T21:00:00Z' },
    { id: 'KO13', round: 'Round of 32', label: 'Match 85', type: 'r32', sourceA: { type: 'winner', group: 'K' }, sourceB: { type: 'third', index: 1 }, venue: 'Estadio Azteca', city: 'Mexico City', datetime: '2026-07-06T17:00:00Z' },
    { id: 'KO14', round: 'Round of 32', label: 'Match 86', type: 'r32', sourceA: { type: 'runnerup', group: 'E' }, sourceB: { type: 'runnerup', group: 'K' }, venue: 'Estadio Guadalajara', city: 'Guadalajara', datetime: '2026-07-06T21:00:00Z' },
    { id: 'KO15', round: 'Round of 32', label: 'Match 87', type: 'r32', sourceA: { type: 'winner', group: 'L' }, sourceB: { type: 'third', index: 0 }, venue: 'BC Place', city: 'Vancouver', datetime: '2026-07-07T17:00:00Z' },
    { id: 'KO16', round: 'Round of 32', label: 'Match 88', type: 'r32', sourceA: { type: 'runnerup', group: 'J' }, sourceB: { type: 'runnerup', group: 'I' }, venue: 'Estadio Monterrey', city: 'Monterrey', datetime: '2026-07-07T21:00:00Z' },

    // Round of 16 (8 matches)
    { id: 'KO17', round: 'Round of 16', label: 'Match 89', type: 'r16', sourceA: { type: 'ko_winner', matchId: 'KO1' }, sourceB: { type: 'ko_winner', matchId: 'KO2' }, venue: 'MetLife Stadium', city: 'New York/New Jersey', datetime: '2026-07-09T17:00:00Z' },
    { id: 'KO18', round: 'Round of 16', label: 'Match 90', type: 'r16', sourceA: { type: 'ko_winner', matchId: 'KO3' }, sourceB: { type: 'ko_winner', matchId: 'KO4' }, venue: 'NRG Stadium', city: 'Houston', datetime: '2026-07-09T21:00:00Z' },
    { id: 'KO19', round: 'Round of 16', label: 'Match 91', type: 'r16', sourceA: { type: 'ko_winner', matchId: 'KO5' }, sourceB: { type: 'ko_winner', matchId: 'KO6' }, venue: 'AT&T Stadium', city: 'Dallas', datetime: '2026-07-10T17:00:00Z' },
    { id: 'KO20', round: 'Round of 16', label: 'Match 92', type: 'r16', sourceA: { type: 'ko_winner', matchId: 'KO7' }, sourceB: { type: 'ko_winner', matchId: 'KO8' }, venue: 'Mercedes-Benz Stadium', city: 'Atlanta', datetime: '2026-07-10T21:00:00Z' },
    { id: 'KO21', round: 'Round of 16', label: 'Match 93', type: 'r16', sourceA: { type: 'ko_winner', matchId: 'KO9' }, sourceB: { type: 'ko_winner', matchId: 'KO10' }, venue: 'Lincoln Financial Field', city: 'Philadelphia', datetime: '2026-07-11T17:00:00Z' },
    { id: 'KO22', round: 'Round of 16', label: 'Match 94', type: 'r16', sourceA: { type: 'ko_winner', matchId: 'KO11' }, sourceB: { type: 'ko_winner', matchId: 'KO12' }, venue: 'Gillette Stadium', city: 'Boston', datetime: '2026-07-11T21:00:00Z' },
    { id: 'KO23', round: 'Round of 16', label: 'Match 95', type: 'r16', sourceA: { type: 'ko_winner', matchId: 'KO13' }, sourceB: { type: 'ko_winner', matchId: 'KO14' }, venue: 'Los Angeles Stadium', city: 'Los Angeles', datetime: '2026-07-12T17:00:00Z' },
    { id: 'KO24', round: 'Round of 16', label: 'Match 96', type: 'r16', sourceA: { type: 'ko_winner', matchId: 'KO15' }, sourceB: { type: 'ko_winner', matchId: 'KO16' }, venue: 'San Francisco Bay Area Stadium', city: 'San Francisco', datetime: '2026-07-12T21:00:00Z' },

    // Quarter-finals (4 matches)
    { id: 'KO25', round: 'Quarterfinals', label: 'Match 97', type: 'qf', sourceA: { type: 'ko_winner', matchId: 'KO17' }, sourceB: { type: 'ko_winner', matchId: 'KO18' }, venue: 'Gillette Stadium', city: 'Boston', datetime: '2026-07-15T17:00:00Z' },
    { id: 'KO26', round: 'Quarterfinals', label: 'Match 98', type: 'qf', sourceA: { type: 'ko_winner', matchId: 'KO19' }, sourceB: { type: 'ko_winner', matchId: 'KO20' }, venue: 'Hard Rock Stadium', city: 'Miami', datetime: '2026-07-15T21:00:00Z' },
    { id: 'KO27', round: 'Quarterfinals', label: 'Match 99', type: 'qf', sourceA: { type: 'ko_winner', matchId: 'KO21' }, sourceB: { type: 'ko_winner', matchId: 'KO22' }, venue: 'Arrowhead Stadium', city: 'Kansas City', datetime: '2026-07-16T17:00:00Z' },
    { id: 'KO28', round: 'Quarterfinals', label: 'Match 100', type: 'qf', sourceA: { type: 'ko_winner', matchId: 'KO23' }, sourceB: { type: 'ko_winner', matchId: 'KO24' }, venue: 'Los Angeles Stadium', city: 'Los Angeles', datetime: '2026-07-16T21:00:00Z' },

    // Semi-finals (2 matches)
    { id: 'KO29', round: 'Semifinals', label: 'Match 101', type: 'sf', sourceA: { type: 'ko_winner', matchId: 'KO25' }, sourceB: { type: 'ko_winner', matchId: 'KO26' }, venue: 'AT&T Stadium', city: 'Dallas', datetime: '2026-07-18T17:00:00Z' },
    { id: 'KO30', round: 'Semifinals', label: 'Match 102', type: 'sf', sourceA: { type: 'ko_winner', matchId: 'KO27' }, sourceB: { type: 'ko_winner', matchId: 'KO28' }, venue: 'Mercedes-Benz Stadium', city: 'Atlanta', datetime: '2026-07-18T21:00:00Z' },

    // Third place play-off (1 match)
    { id: 'KO31', round: 'Third Place', label: 'Match 103', type: 'third_place', sourceA: { type: 'ko_loser', matchId: 'KO29' }, sourceB: { type: 'ko_loser', matchId: 'KO30' }, venue: 'Hard Rock Stadium', city: 'Miami', datetime: '2026-07-18T19:00:00Z' },

    // Final (1 match)
    { id: 'KO32', round: 'Final', label: 'Match 104', type: 'final', sourceA: { type: 'ko_winner', matchId: 'KO29' }, sourceB: { type: 'ko_winner', matchId: 'KO30' }, venue: 'MetLife Stadium', city: 'New York/New Jersey', datetime: '2026-07-19T18:00:00Z' }
];

// Base predictions to reset to (extracted from user images)
const INITIAL_PREDICTIONS = {
    matches: {
        "1": { scoreA: "2", scoreB: "0" },
        "2": { scoreA: "1", scoreB: "2" },
        "3": { scoreA: "2", scoreB: "1" },
        "4": { scoreA: "0", scoreB: "3" },
        "5": { scoreA: "1", scoreB: "2" },
        "6": { scoreA: "3", scoreB: "1" },
        "7": { scoreA: "2", scoreB: "1" },
        "8": { scoreA: "1", scoreB: "1" },
        "9": { scoreA: "0", scoreB: "2" },
        "10": { scoreA: "4", scoreB: "0" },
        "11": { scoreA: "2", scoreB: "1" },
        "12": { scoreA: "1", scoreB: "0" },
        "13": { scoreA: "0", scoreB: "0" },
        "14": { scoreA: "3", scoreB: "1" },
        "15": { scoreA: "2", scoreB: "0" },
        "16": { scoreA: "4", scoreB: "1" },
        "17": { scoreA: "4", scoreB: "0" },
        "18": { scoreA: "1", scoreB: "1" },
        "19": { scoreA: "3", scoreB: "2" },
        "20": { scoreA: "1", scoreB: "2" },
        "21": { scoreA: "0", scoreB: "2" },
        "22": { scoreA: "3", scoreB: "1" },
        "23": { scoreA: "0", scoreB: "2" },
        "24": { scoreA: "1", scoreB: "1" },
        "25": { scoreA: "1", scoreB: "1" },
        "26": { scoreA: "0", scoreB: "2" },
        "27": { scoreA: "2", scoreB: "2" },
        "28": { scoreA: "1", scoreB: "0" },
        "29": { scoreA: "0", scoreB: "2" },
        "30": { scoreA: "2", scoreB: "0" },
        "31": { scoreA: "2", scoreB: "2" },
        "32": { scoreA: "0", scoreB: "1" },
        "33": { scoreA: "1", scoreB: "2" },
        "34": { scoreA: "1", scoreB: "2" },
        "35": { scoreA: "1", scoreB: "1" },
        "36": { scoreA: "0", scoreB: "3" },
        "37": { scoreA: "1", scoreB: "1" },
        "38": { scoreA: "2", scoreB: "2" },
        "39": { scoreA: "1", scoreB: "2" },
        "40": { scoreA: "4", scoreB: "0" },
        "41": { scoreA: "3", scoreB: "1" },
        "42": { scoreA: "0", scoreB: "2" },
        "43": { scoreA: "3", scoreB: "1" },
        "44": { scoreA: "2", scoreB: "0" },
        "45": { scoreA: "0", scoreB: "3" },
        "46": { scoreA: "3", scoreB: "1" },
        "47": { scoreA: "1", scoreB: "1" },
        "48": { scoreA: "4", scoreB: "0" },
        "49": { scoreA: "0", scoreB: "3" },
        "50": { scoreA: "2", scoreB: "1" },
        "51": { scoreA: "2", scoreB: "2" },
        "52": { scoreA: "1", scoreB: "2" },
        "53": { scoreA: "2", scoreB: "1" },
        "54": { scoreA: "1", scoreB: "3" },
        "55": { scoreA: "3", scoreB: "1" },
        "56": { scoreA: "2", scoreB: "0" },
        "57": { scoreA: "0", scoreB: "2" },
        "58": { scoreA: "1", scoreB: "2" },
        "59": { scoreA: "1", scoreB: "2" },
        "60": { scoreA: "0", scoreB: "4" },
        "61": { scoreA: "3", scoreB: "0" },
        "62": { scoreA: "1", scoreB: "2" },
        "63": { scoreA: "3", scoreB: "0" },
        "64": { scoreA: "0", scoreB: "2" },
        "65": { scoreA: "1", scoreB: "2" },
        "66": { scoreA: "1", scoreB: "1" },
        "67": { scoreA: "2", scoreB: "1" },
        "68": { scoreA: "0", scoreB: "1" },
        "69": { scoreA: "1", scoreB: "2" },
        "70": { scoreA: "0", scoreB: "3" },
        "71": { scoreA: "2", scoreB: "0" },
        "72": { scoreA: "0", scoreB: "2" }
    },
    knockout: {
        "KO1": { scoreA: "2", scoreB: "0", penA: "", penB: "" },
        "KO2": { scoreA: "1", scoreB: "2", penA: "", penB: "" },
        "KO3": { scoreA: "3", scoreB: "1", penA: "", penB: "" },
        "KO4": { scoreA: "2", scoreB: "1", penA: "", penB: "" },
        "KO5": { scoreA: "3", scoreB: "1", penA: "", penB: "" },
        "KO6": { scoreA: "2", scoreB: "2", penA: "4", penB: "5" },
        "KO7": { scoreA: "2", scoreB: "2", penA: "5", penB: "4" },
        "KO8": { scoreA: "2", scoreB: "3", penA: "", penB: "" },
        "KO9": { scoreA: "2", scoreB: "1", penA: "", penB: "" },
        "KO10": { scoreA: "2", scoreB: "1", penA: "", penB: "" },
        "KO11": { scoreA: "3", scoreB: "0", penA: "", penB: "" },
        "KO12": { scoreA: "2", scoreB: "1", penA: "", penB: "" },
        "KO13": { scoreA: "1", scoreB: "1", penA: "5", penB: "4" },
        "KO14": { scoreA: "2", scoreB: "2", penA: "4", penB: "5" },
        "KO15": { scoreA: "2", scoreB: "0", penA: "", penB: "" },
        "KO16": { scoreA: "2", scoreB: "1", penA: "", penB: "" },
        "KO17": { scoreA: "1", scoreB: "1", penA: "3", penB: "4" },
        "KO18": { scoreA: "1", scoreB: "2", penA: "", penB: "" },
        "KO19": { scoreA: "0", scoreB: "0", penA: "3", penB: "4" },
        "KO20": { scoreA: "0", scoreB: "2", penA: "", penB: "" },
        "KO21": { scoreA: "2", scoreB: "0", penA: "", penB: "" },
        "KO22": { scoreA: "2", scoreB: "1", penA: "", penB: "" },
        "KO23": { scoreA: "2", scoreB: "1", penA: "", penB: "" },
        "KO24": { scoreA: "2", scoreB: "1", penA: "", penB: "" },
        "KO25": { scoreA: "1", scoreB: "2", penA: "", penB: "" },
        "KO26": { scoreA: "1", scoreB: "2", penA: "", penB: "" },
        "KO27": { scoreA: "2", scoreB: "1", penA: "", penB: "" },
        "KO28": { scoreA: "2", scoreB: "0", penA: "", penB: "" },
        "KO29": { scoreA: "0", scoreB: "1", penA: "", penB: "" },
        "KO30": { scoreA: "2", scoreB: "1", penA: "", penB: "" },
        "KO31": { scoreA: "3", scoreB: "2", penA: "", penB: "" },
        "KO32": { scoreA: "1", scoreB: "2", penA: "", penB: "" }
    }
};

// App State
let predictions = JSON.parse(JSON.stringify(INITIAL_PREDICTIONS));

let currentTab = 'matches';
let timezoneMode = 'local';
let customTz = 'Asia/Shanghai';
let currentLanguage = 'zh';

// Standings computed state
let groupStandings = {};
let thirdPlaceRankings = [];

// DOM Elements
const navTabs = document.getElementById('navTabs');
const timezoneSelector = document.getElementById('timezoneSelector');
const customTzSelect = document.getElementById('customTzSelect');
const languageSelector = document.getElementById('languageSelector');
const matchGrid = document.getElementById('matchGrid');
const groupsContainer = document.getElementById('groupsContainer');
const thirdPlaceBody = document.getElementById('thirdPlaceBody');
const bracketContainer = document.getElementById('bracketContainer');

const filterGroup = document.getElementById('filterGroup');
const filterCity = document.getElementById('filterCity');
const filterStatus = document.getElementById('filterStatus');
const searchTeam = document.getElementById('searchTeam');

const btnSimulate = document.getElementById('btnSimulate');
const btnReset = document.getElementById('btnReset');
const btnClear = document.getElementById('btnClear');
const btnExport = document.getElementById('btnExport');
const btnImport = document.getElementById('btnImport');
const importFile = document.getElementById('importFile');

// Set dynamic interface language
function setLanguage(lang) {
    currentLanguage = lang;
    
    // Update active button state in header
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    savePrefs();
    translateStaticUI();
    renderAll();
}

// Translate all static labels in the DOM
function translateStaticUI() {
    // Brand
    document.getElementById('brandSubtitle').textContent = t('brand_subtitle');
    document.getElementById('teamsCount').textContent = t('brand_subtitle') === "预测与赛程表" ? "48 支球队" : "48 Teams";
    
    // Buttons
    const btnSimulate = document.getElementById('btnSimulate');
    btnSimulate.textContent = t('quick_simulate');
    btnSimulate.title = t('quick_simulate_title');
    
    const btnReset = document.getElementById('btnReset');
    btnReset.textContent = t('reset');
    btnReset.title = t('reset_title');
    
    const btnClear = document.getElementById('btnClear');
    btnClear.textContent = t('clear_all');
    btnClear.title = t('clear_all_title');
    
    const btnExport = document.getElementById('btnExport');
    btnExport.textContent = t('export');
    btnExport.title = t('export_title');
    
    const btnImport = document.getElementById('btnImport');
    btnImport.textContent = t('import');
    btnImport.title = t('import_title');
    
    // Tabs
    document.getElementById('tab-matches').textContent = t('tab_matches');
    document.getElementById('tab-standings').textContent = t('tab_standings');
    document.getElementById('tab-bracket').textContent = t('tab_bracket');
    document.getElementById('tab-help').textContent = t('tab_help');
    
    // Timezone selector buttons
    document.getElementById('btn-tz-local').textContent = t('tz_local');
    document.getElementById('btn-tz-custom').textContent = t('tz_custom');
    
    // Standings headers & text
    document.getElementById('thirdPlacesTitle').innerHTML = `<span>ℹ️</span> ${t('third_places_title')}`;
    document.getElementById('thirdPlacesDesc').textContent = t('third_places_desc');
    
    document.getElementById('th-pos').textContent = t('th_pos');
    document.getElementById('th-group').textContent = t('th_group');
    document.getElementById('th-team').textContent = t('th_team');
    document.getElementById('th-p').textContent = t('th_p');
    document.getElementById('th-w').textContent = t('th_w');
    document.getElementById('th-d').textContent = t('th_d');
    document.getElementById('th-l').textContent = t('th_l');
    document.getElementById('th-gd').textContent = t('th_gd');
    document.getElementById('th-gf').textContent = t('th_gf');
    document.getElementById('th-pts').textContent = t('th_pts');
    
    // Bracket instructions
    document.getElementById('bracketInstructions').innerHTML = t('bracket_instructions');
    
    // Help content (fully dynamic)
    renderHelpContainer();
    
    // Footers
    document.getElementById('footerCreated').textContent = t('footer_created');
    document.getElementById('footerDisclaimer').textContent = t('footer_disclaimer');
    
    // Translate filters dropdowns
    // 1. Group stage filter
    const prevGroupVal = filterGroup.value;
    filterGroup.innerHTML = '';
    const allGroupsOpt = document.createElement('option');
    allGroupsOpt.value = 'all';
    allGroupsOpt.textContent = t('filter_all_groups');
    filterGroup.appendChild(allGroupsOpt);
    
    for (let c = 65; c <= 76; c++) {
        const letter = String.fromCharCode(c);
        const opt = document.createElement('option');
        opt.value = letter;
        opt.textContent = currentLanguage === 'zh' ? `${letter}组` : `Group ${letter}`;
        filterGroup.appendChild(opt);
    }
    filterGroup.value = prevGroupVal;
    
    // 2. City filter
    const prevCityVal = filterCity.value;
    filterCity.innerHTML = '';
    const allCitiesOpt = document.createElement('option');
    allCitiesOpt.value = 'all';
    allCitiesOpt.textContent = t('filter_all_cities');
    filterCity.appendChild(allCitiesOpt);
    
    Object.keys(CITY_TIMEZONES).forEach(city => {
        const opt = document.createElement('option');
        opt.value = city;
        opt.textContent = t(city, 'cities');
        filterCity.appendChild(opt);
    });
    filterCity.value = prevCityVal;
    
    // 3. Status filter
    const prevStatusVal = filterStatus.value;
    filterStatus.innerHTML = `
        <option value="all">${t('filter_all_statuses')}</option>
        <option value="predicted">${t('filter_predicted_only')}</option>
        <option value="unpredicted">${t('filter_unpredicted_only')}</option>
    `;
    filterStatus.value = prevStatusVal;
    
    // 4. Search placeholder
    searchTeam.placeholder = t('search_placeholder');
}

// Render dynamic help container content based on language
function renderHelpContainer() {
    const helpContainer = document.getElementById('helpContainer');
    if (!helpContainer) return;
    
    if (currentLanguage === 'zh') {
        helpContainer.innerHTML = `
            <h2><span>⚽</span> 锦标赛规则与指南</h2>
            
            <div class="help-section">
                <h3>关于 2026 年国际足联世界杯</h3>
                <p>
                    2026年世界杯是第23届国际足联世界杯，将于2026年6月11日至7月19日由加拿大、墨西哥和美国联合举办。这是首次有48支球队参赛的世界杯（由32支球队扩军）。
                </p>
            </div>

            <div class="help-section">
                <h3>小组赛同分排名规则</h3>
                <p>每个小组的球队排名根据以下规则确定：</p>
                <ul class="help-list">
                    <li>所有小组赛获得的积分（胜一场积3分，平一场积1分，负一场积0分）。</li>
                    <li>所有小组赛的净胜球差（进球数 - 失球数）。</li>
                    <li>所有小组赛的总进球数。</li>
                    <li>相关同分球队之间比赛的积分。</li>
                    <li>相关同分球队之间比赛的净胜球差。</li>
                    <li>相关同分球队之间比赛的总进球数。</li>
                </ul>
            </div>

            <div class="help-section">
                <h3>淘汰赛赛制</h3>
                <p>
                    共有 32 支球队从小组赛晋级淘汰赛阶段：
                </p>
                <ul class="help-list">
                    <li>12 个小组的每组前两名（共 24 支球队）。</li>
                    <li>所有小组中成绩最好的 8 支第三名球队。</li>
                    <li>淘汰赛为单败淘汰制。如果比赛在常规时间结束时打平，将进行加时赛，如果仍打平，则进行/模拟点球大战。</li>
                </ul>
            </div>

            <div class="help-section">
                <h3>时区与语言支持</h3>
                <p>
                    您可以在顶部页眉中自由切换时间和界面语言：
                </p>
                <ul class="help-list">
                    <li><strong>当地时间</strong>：以您当前设备的本地时区显示比赛开球时间。</li>
                    <li><strong>自定义时区</strong>：从下拉菜单中选择世界上任何主要时区（默认显示为北京时间 CST UTC+8）。</li>
                    <li><strong>界面语言</strong>：点击 🇺🇸 EN / 🇨🇳 中文 按钮可以在英文和中文之间即时切换。</li>
                </ul>
            </div>
        `;
    } else {
        helpContainer.innerHTML = `
            <h2><span>⚽</span> Tournament Rules & Guide</h2>
            
            <div class="help-section">
                <h3>About the 2026 FIFA World Cup</h3>
                <p>
                    The 2026 World Cup is the 23rd FIFA World Cup, hosted jointly by Canada, Mexico, and the United States from June 11 to July 19, 2026. This is the first tournament to feature 48 teams (expanded from 32).
                </p>
            </div>

            <div class="help-section">
                <h3>Group Stage Tie-Breakers</h3>
                <p>Teams in each group are ranked according to:</p>
                <ul class="help-list">
                    <li>Points obtained in all group matches (3 for a win, 1 for a draw, 0 for a loss).</li>
                    <li>Goal difference in all group matches (GF - GA).</li>
                    <li>Number of goals scored in all group matches (GF).</li>
                    <li>Head-to-head points obtained between the tied teams.</li>
                    <li>Head-to-head goal difference between the tied teams.</li>
                    <li>Head-to-head goals scored between the tied teams.</li>
                </ul>
            </div>

            <div class="help-section">
                <h3>Knockout Format</h3>
                <p>
                    A total of 32 teams advance from the group stage to the knockout rounds:
                </p>
                <ul class="help-list">
                    <li>The top two teams from each of the 12 groups (24 teams total).</li>
                    <li>The 8 best-ranked third-place teams across all groups.</li>
                    <li>Knockout matches are single-elimination. If a match is tied at the end of normal playing time, it goes to extra time, and if still tied, a penalty shootout is simulated/entered.</li>
                </ul>
            </div>

            <div class="help-section">
                <h3>Timezone & Language Support</h3>
                <p>
                    You can view match times and interface text in different configurations:
                </p>
                <ul class="help-list">
                    <li><strong>Local Time</strong>: Displays the kickoff in your device's current timezone.</li>
                    <li><strong>Custom Zone</strong>: Allows you to select any major timezone (defaults to Beijing Time CST UTC+8).</li>
                    <li><strong>Language</strong>: Click the 🇺🇸 EN / 🇨🇳 中文 buttons in the header to switch languages instantly.</li>
                </ul>
            </div>
        `;
    }
}

// Initialize App
function init() {
    loadState();
    setupEventListeners();
    calculateGroupStandings();
    
    // Set initial custom timezone select value
    customTzSelect.value = customTz;
    if (timezoneMode === 'custom') {
        customTzSelect.style.display = 'block';
        document.getElementById('btn-tz-custom').classList.add('active');
        document.getElementById('btn-tz-local').classList.remove('active');
    } else {
        customTzSelect.style.display = 'none';
        document.getElementById('btn-tz-local').classList.add('active');
        document.getElementById('btn-tz-custom').classList.remove('active');
    }
    
    // Set initial language selection state
    setLanguage(currentLanguage);
}

// Load predictions from local storage
function loadState() {
    const stored = localStorage.getItem('wc2026_predictions');
    if (stored) {
        try {
            predictions = JSON.parse(stored);
            if (!predictions.matches) predictions.matches = {};
            if (!predictions.knockout) predictions.knockout = {};
        } catch (e) {
            console.error('Failed to parse predictions', e);
        }
    } else {
        // Initialize with default predictions on first run
        predictions = JSON.parse(JSON.stringify(INITIAL_PREDICTIONS));
        saveState();
    }
    
    const storedTzMode = localStorage.getItem('wc2026_tz_mode');
    if (storedTzMode) timezoneMode = storedTzMode;
    
    const storedCustomTz = localStorage.getItem('wc2026_custom_tz');
    if (storedCustomTz) customTz = storedCustomTz;
    
    const storedLang = localStorage.getItem('wc2026_lang');
    if (storedLang) currentLanguage = storedLang;
}

// Save predictions to local storage
function saveState() {
    localStorage.setItem('wc2026_predictions', JSON.stringify(predictions));
}

// Save preferences to local storage
function savePrefs() {
    localStorage.setItem('wc2026_tz_mode', timezoneMode);
    localStorage.setItem('wc2026_custom_tz', customTz);
    localStorage.setItem('wc2026_lang', currentLanguage);
}

// Setup Event Listeners
function setupEventListeners() {
    // Navigation Tabs
    navTabs.addEventListener('click', (e) => {
        const tabLink = e.target.closest('.tab-link');
        if (!tabLink) return;
        
        document.querySelectorAll('.tab-link').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
        
        tabLink.classList.add('active');
        currentTab = tabLink.dataset.tab;
        
        const activePanel = document.getElementById(`panel-${currentTab}`);
        if (activePanel) activePanel.classList.add('active');
        
        renderAll();
    });

    // Timezone Selector
    timezoneSelector.addEventListener('click', (e) => {
        const tzBtn = e.target.closest('.tz-btn');
        if (!tzBtn) return;
        
        document.querySelectorAll('.tz-btn').forEach(btn => btn.classList.remove('active'));
        tzBtn.classList.add('active');
        timezoneMode = tzBtn.dataset.tzMode;
        
        if (timezoneMode === 'custom') {
            customTzSelect.style.display = 'block';
        } else {
            customTzSelect.style.display = 'none';
        }
        
        savePrefs();
        renderAll();
    });

    // Custom Timezone select change
    customTzSelect.addEventListener('change', (e) => {
        customTz = e.target.value;
        savePrefs();
        renderAll();
    });

    // Language Selector
    languageSelector.addEventListener('click', (e) => {
        const langBtn = e.target.closest('.lang-btn');
        if (!langBtn) return;
        
        const newLang = langBtn.dataset.lang;
        setLanguage(newLang);
    });

    // Match Filter Inputs
    filterGroup.addEventListener('change', renderAll);
    filterCity.addEventListener('change', renderAll);
    filterStatus.addEventListener('change', renderAll);
    searchTeam.addEventListener('input', renderAll);

    // Simulate Button
    btnSimulate.addEventListener('click', () => {
        quickSimulate();
    });

    // Reset Button (Resets to base approved predictions)
    btnReset.addEventListener('click', () => {
        if (confirm(t('alert_reset_confirm'))) {
            predictions = JSON.parse(JSON.stringify(INITIAL_PREDICTIONS));
            saveState();
            calculateGroupStandings();
            renderAll();
        }
    });

    // Clear All Button (Clears all predictions)
    btnClear.addEventListener('click', () => {
        if (confirm(t('alert_clear_confirm'))) {
            predictions = { matches: {}, knockout: {} };
            saveState();
            calculateGroupStandings();
            renderAll();
        }
    });

    // Export predictions to JSON file
    btnExport.addEventListener('click', () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(predictions, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", "world_cup_2026_predictions.json");
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    });

    // Import predictions from JSON file
    btnImport.addEventListener('click', () => {
        importFile.click();
    });

    importFile.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(evt) {
            try {
                const imported = JSON.parse(evt.target.result);
                if (imported && (imported.matches || imported.knockout)) {
                    predictions = {
                        matches: imported.matches || {},
                        knockout: imported.knockout || {}
                    };
                    saveState();
                    calculateGroupStandings();
                    renderAll();
                    alert(t('alert_import_success'));
                } else {
                    alert(t('alert_import_fail'));
                }
            } catch (err) {
                alert(t('alert_read_fail'));
            }
            importFile.value = ''; // Reset file input
        };
        reader.readAsText(file);
    });
}

// Format date time dynamically based on selected timezone
function formatMatchTime(isoString, selectedMode, city) {
    const date = new Date(isoString);
    let timeZone;

    if (selectedMode === 'local') {
        timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
    } else {
        timeZone = customTz;
    }

    try {
        const langCode = currentLanguage === 'zh' ? 'zh-CN' : 'en-US';
        const options = {
            month: 'short',
            day: 'numeric',
            weekday: 'short',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            timeZone: timeZone,
            timeZoneName: 'short'
        };
        const formatted = new Intl.DateTimeFormat(langCode, options).format(date);
        return formatted;
    } catch (e) {
        console.error(e);
        return date.toUTCString();
    }
}

// Recalculate all 12 groups standing tables
function calculateGroupStandings() {
    groupStandings = {};
    
    // Initialize groups
    for (const [groupLetter, teams] of Object.entries(GROUPS_TEAMS)) {
        groupStandings[groupLetter] = teams.map(teamName => ({
            name: teamName,
            flag: TEAM_FLAGS[teamName] || '🏳️',
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            gf: 0,
            ga: 0,
            gd: 0,
            pts: 0
        }));
    }

    // Process group matches
    groupMatches.forEach(match => {
        const pred = predictions.matches[match.id];
        if (pred && pred.scoreA !== undefined && pred.scoreB !== undefined && pred.scoreA !== '' && pred.scoreB !== '') {
            const sA = parseInt(pred.scoreA, 10);
            const sB = parseInt(pred.scoreB, 10);

            if (!isNaN(sA) && !isNaN(sB)) {
                const groupList = groupStandings[match.group];
                const teamAObj = groupList.find(t => t.name === match.teamA);
                const teamBObj = groupList.find(t => t.name === match.teamB);

                if (teamAObj && teamBObj) {
                    teamAObj.played++;
                    teamBObj.played++;

                    teamAObj.gf += sA;
                    teamAObj.ga += sB;
                    teamBObj.gf += sB;
                    teamBObj.ga += sA;

                    if (sA > sB) {
                        teamAObj.won++;
                        teamAObj.pts += 3;
                        teamBObj.lost++;
                    } else if (sA < sB) {
                        teamBObj.won++;
                        teamBObj.pts += 3;
                        teamAObj.lost++;
                    } else {
                        teamAObj.drawn++;
                        teamAObj.pts += 1;
                        teamBObj.drawn++;
                        teamBObj.pts += 1;
                    }
                }
            }
        }
    });

    // Update GD and Sort Groups
    for (const groupLetter of Object.keys(groupStandings)) {
        const groupList = groupStandings[groupLetter];
        groupList.forEach(t => {
            t.gd = t.gf - t.ga;
        });

        // Sorting by points -> GD -> GF -> name
        groupList.sort((a, b) => {
            if (b.pts !== a.pts) return b.pts - a.pts;
            if (b.gd !== a.gd) return b.gd - a.gd;
            if (b.gf !== a.gf) return b.gf - a.gf;
            return a.name.localeCompare(b.name);
        });
    }

    // Calculate Best 3rd Place Standings
    thirdPlaceRankings = [];
    for (const groupLetter of Object.keys(groupStandings)) {
        const thirdPlaceTeam = groupStandings[groupLetter][2]; // index 2 is the 3rd team
        if (thirdPlaceTeam) {
            thirdPlaceRankings.push({
                ...thirdPlaceTeam,
                group: groupLetter
            });
        }
    }

    // Sort Third Places
    thirdPlaceRankings.sort((a, b) => {
        if (b.pts !== a.pts) return b.pts - a.pts;
        if (b.gd !== a.gd) return b.gd - a.gd;
        if (b.gf !== a.gf) return b.gf - a.gf;
        return a.group.localeCompare(b.group);
    });
}

// Get team who qualified in group
function getGroupWinner(groupLetter) {
    return groupStandings[groupLetter] ? groupStandings[groupLetter][0].name : '';
}

function getGroupRunnerUp(groupLetter) {
    return groupStandings[groupLetter] ? groupStandings[groupLetter][1].name : '';
}

function getBestThirdPlace(index) {
    return thirdPlaceRankings[index] ? thirdPlaceRankings[index].name : '';
}

// Resolve team name for knockout matches based on sources
function resolveKnockoutTeam(source) {
    if (!source) return '';

    if (source.type === 'winner') {
        return getGroupWinner(source.group);
    }
    if (source.type === 'runnerup') {
        return getGroupRunnerUp(source.group);
    }
    if (source.type === 'third') {
        return getBestThirdPlace(source.index);
    }
    if (source.type === 'ko_winner') {
        const parentMatch = knockoutMatches.find(m => m.id === source.matchId);
        if (!parentMatch) return '';
        return getKnockoutWinner(parentMatch);
    }
    if (source.type === 'ko_loser') {
        const parentMatch = knockoutMatches.find(m => m.id === source.matchId);
        if (!parentMatch) return '';
        return getKnockoutLoser(parentMatch);
    }
    return '';
}

// Get winner of a knockout match
function getKnockoutWinner(match) {
    const teamA = resolveKnockoutTeam(match.sourceA);
    const teamB = resolveKnockoutTeam(match.sourceB);
    
    if (!teamA || !teamB) return '';

    const pred = predictions.knockout[match.id];
    if (pred && pred.scoreA !== undefined && pred.scoreB !== undefined && pred.scoreA !== '' && pred.scoreB !== '') {
        const sA = parseInt(pred.scoreA, 10);
        const sB = parseInt(pred.scoreB, 10);

        if (!isNaN(sA) && !isNaN(sB)) {
            if (sA > sB) return teamA;
            if (sB > sA) return teamB;
            
            // Penalty shootout
            const pA = parseInt(pred.penA, 10);
            const pB = parseInt(pred.penB, 10);
            if (!isNaN(pA) && !isNaN(pB)) {
                if (pA > pB) return teamA;
                if (pB > pA) return teamB;
            }
        }
    }
    return '';
}

// Get loser of a knockout match (used for third-place play-off)
function getKnockoutLoser(match) {
    const teamA = resolveKnockoutTeam(match.sourceA);
    const teamB = resolveKnockoutTeam(match.sourceB);
    
    if (!teamA || !teamB) return '';

    const winner = getKnockoutWinner(match);
    if (!winner) return '';

    return winner === teamA ? teamB : teamA;
}

// Sample Poisson random number
function poissonRandom(lambda) {
    let L = Math.exp(-lambda);
    let k = 0;
    let p = 1.0;
    do {
        k++;
        p *= Math.random();
    } while (p > L && k < 15);
    return k - 1;
}

// Simulate scores dynamically based on relative team rankings
function simulateMatchScores(teamA, teamB, isKnockout = false) {
    const rankA = FIFA_RANKINGS[teamA] || 50;
    const rankB = FIFA_RANKINGS[teamB] || 50;

    // Rank difference (positive means A is better ranked)
    const diff = rankB - rankA;

    // Calculate expected goals (lambda), clamping to reasonable football bounds
    const lambdaA = Math.max(0.2, Math.min(4.5, 1.35 + (diff / 35)));
    const lambdaB = Math.max(0.2, Math.min(4.5, 1.35 - (diff / 35)));

    const scoreA = poissonRandom(lambdaA);
    const scoreB = poissonRandom(lambdaB);

    let penA = '';
    let penB = '';

    if (isKnockout && scoreA === scoreB) {
        // Penalty shootout simulation
        // The higher ranked team has a slightly higher chance of winning (58% vs 42%)
        const winProbA = diff > 0 ? 0.58 : (diff < 0 ? 0.42 : 0.5);
        const aWins = Math.random() < winProbA;

        // Realistic penalty shootout scores (e.g. 5-4, 4-3, 3-2, etc. starting at 3+)
        const basePen = 3 + Math.floor(Math.random() * 3); // 3, 4, or 5
        if (aWins) {
            penA = basePen.toString();
            penB = (basePen - 1).toString();
        } else {
            penB = basePen.toString();
            penA = (basePen - 1).toString();
        }
    }

    return {
        scoreA: scoreA.toString(),
        scoreB: scoreB.toString(),
        penA,
        penB
    };
}

// Quick simulation of scores (fun tool for the user!)
function quickSimulate() {
    // Simulate Group Stage Matches
    groupMatches.forEach(match => {
        const kickoffDate = new Date(match.datetime);
        const now = new Date();
        const isLocked = now > kickoffDate;
        const pred = predictions.matches[match.id];
        const isPinned = pred && pred.pinned;

        if (!isLocked && !isPinned) {
            const sim = simulateMatchScores(match.teamA, match.teamB, false);
            predictions.matches[match.id] = {
                scoreA: sim.scoreA,
                scoreB: sim.scoreB,
                pinned: pred ? !!pred.pinned : false
            };
        }
    });

    saveState();
    calculateGroupStandings();

    // Simulate Knockout Matches
    // We simulate round by round sequentially because future rounds depend on previous ones!
    const rounds = ['r32', 'r16', 'qf', 'sf', 'third_place', 'final'];
    
    rounds.forEach(roundType => {
        const matchesInRound = knockoutMatches.filter(m => m.type === roundType);
        matchesInRound.forEach(match => {
            const teamA = resolveKnockoutTeam(match.sourceA);
            const teamB = resolveKnockoutTeam(match.sourceB);
            
            if (teamA && teamB) {
                const kickoffDate = new Date(match.datetime);
                const now = new Date();
                const isLocked = now > kickoffDate;
                const pred = predictions.knockout[match.id];
                const isPinned = pred && pred.pinned;

                if (!isLocked && !isPinned) {
                    const sim = simulateMatchScores(teamA, teamB, true);
                    predictions.knockout[match.id] = {
                        scoreA: sim.scoreA,
                        scoreB: sim.scoreB,
                        penA: sim.penA,
                        penB: sim.penB,
                        pinned: pred ? !!pred.pinned : false
                    };
                }
            }
        });
    });

    saveState();
    calculateGroupStandings();
    renderAll();
}

// Render everything based on active tab and state
function renderAll() {
    if (currentTab === 'matches') {
        renderMatches();
    } else if (currentTab === 'standings') {
        renderStandings();
    } else if (currentTab === 'bracket') {
        renderBracket();
    }
}

// Render Group Matches Tab
function renderMatches() {
    const groupVal = filterGroup.value;
    const cityVal = filterCity.value;
    const statusVal = filterStatus.value;
    const searchVal = searchTeam.value.toLowerCase().trim();

    // Filter matches
    const filteredMatches = groupMatches.filter(match => {
        if (groupVal !== 'all' && match.group !== groupVal) return false;
        if (cityVal !== 'all' && match.city !== cityVal) return false;
        
        const pred = predictions.matches[match.id];
        const isPredicted = pred && pred.scoreA !== undefined && pred.scoreB !== undefined && pred.scoreA !== '' && pred.scoreB !== '';
        
        if (statusVal === 'predicted' && !isPredicted) return false;
        if (statusVal === 'unpredicted' && isPredicted) return false;

        if (searchVal) {
            const tA_en = match.teamA.toLowerCase();
            const tB_en = match.teamB.toLowerCase();
            const tA_zh = t(match.teamA, 'teams').toLowerCase();
            const tB_zh = t(match.teamB, 'teams').toLowerCase();
            if (!tA_en.includes(searchVal) && !tB_en.includes(searchVal) &&
                !tA_zh.includes(searchVal) && !tB_zh.includes(searchVal)) {
                return false;
            }
        }

        return true;
    });

    // Populate Match Cards
    if (filteredMatches.length === 0) {
        matchGrid.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">⚽</div>
                <h3>${t('no_matches_found')}</h3>
                <p>${t('no_matches_desc')}</p>
            </div>
        `;
        return;
    }

    matchGrid.innerHTML = filteredMatches.map(match => {
        const pred = predictions.matches[match.id] || { scoreA: '', scoreB: '' };
        const isPredicted = pred.scoreA !== '' && pred.scoreB !== '';
        
        const kickoffDate = new Date(match.datetime);
        const now = new Date();
        const isLocked = now > kickoffDate;

        return `
            <div class="match-card ${isPredicted ? 'predicted' : ''}" id="match-card-${match.id}">
                <div class="match-header">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <span class="match-id">${t('match_prefix')} ${match.id}</span>
                        ${isLocked ? `<span class="match-locked">🔒 ${t('match_locked')}</span>` : ''}
                        ${!isLocked ? `
                            <button class="pin-btn ${pred.pinned ? 'pinned' : ''}" data-match-id="${match.id}" title="${pred.pinned ? t('unpin_match') : t('pin_match')}">📌</button>
                        ` : ''}
                    </div>
                    <span class="match-group">${t('group_prefix')} ${match.group}</span>
                </div>
                
                <div class="match-teams">
                    <!-- Team A -->
                    <div class="team-row">
                        <div class="team-info">
                            <span class="team-flag">${match.flagA}</span>
                            <span class="team-name">${t(match.teamA, 'teams')}</span>
                        </div>
                        <div class="score-selector-wrapper">
                            <div class="quick-scores" data-match-id="${match.id}" data-team="A">
                                <button class="q-btn ${pred.scoreA === '0' ? 'active' : ''}" data-val="0" ${isLocked ? 'disabled' : ''}>0</button>
                                <button class="q-btn ${pred.scoreA === '1' ? 'active' : ''}" data-val="1" ${isLocked ? 'disabled' : ''}>1</button>
                                <button class="q-btn ${pred.scoreA === '2' ? 'active' : ''}" data-val="2" ${isLocked ? 'disabled' : ''}>2</button>
                                <button class="q-btn ${pred.scoreA === '3' ? 'active' : ''}" data-val="3" ${isLocked ? 'disabled' : ''}>3</button>
                            </div>
                            <input type="number" min="0" max="99" class="score-input" 
                                   value="${pred.scoreA || ''}" 
                                   data-match-id="${match.id}" 
                                   data-team="A" 
                                   id="match-${match.id}-A" 
                                   placeholder="-"
                                   ${isLocked ? 'disabled' : ''}>
                        </div>
                    </div>

                    <!-- Team B -->
                    <div class="team-row">
                        <div class="team-info">
                            <span class="team-flag">${match.flagB}</span>
                            <span class="team-name">${t(match.teamB, 'teams')}</span>
                        </div>
                        <div class="score-selector-wrapper">
                            <div class="quick-scores" data-match-id="${match.id}" data-team="B">
                                <button class="q-btn ${pred.scoreB === '0' ? 'active' : ''}" data-val="0" ${isLocked ? 'disabled' : ''}>0</button>
                                <button class="q-btn ${pred.scoreB === '1' ? 'active' : ''}" data-val="1" ${isLocked ? 'disabled' : ''}>1</button>
                                <button class="q-btn ${pred.scoreB === '2' ? 'active' : ''}" data-val="2" ${isLocked ? 'disabled' : ''}>2</button>
                                <button class="q-btn ${pred.scoreB === '3' ? 'active' : ''}" data-val="3" ${isLocked ? 'disabled' : ''}>3</button>
                            </div>
                            <input type="number" min="0" max="99" class="score-input" 
                                   value="${pred.scoreB || ''}" 
                                   data-match-id="${match.id}" 
                                   data-team="B" 
                                   id="match-${match.id}-B" 
                                   placeholder="-"
                                   ${isLocked ? 'disabled' : ''}>
                        </div>
                    </div>
                </div>

                <div class="match-footer">
                    <div class="match-venue">📍 ${t(match.venue, 'venues')}, ${t(match.city, 'cities')}, ${t(CITY_COUNTRIES[match.city], 'countries')}</div>
                    <div class="match-time-row">
                        <div class="match-time active-tz">⏱️ ${formatMatchTime(match.datetime, timezoneMode, match.city)}</div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Bind score input changes
    matchGrid.querySelectorAll('.score-input').forEach(input => {
        input.addEventListener('input', (e) => {
            const matchId = e.target.dataset.matchId;
            const team = e.target.dataset.team;
            const val = e.target.value.trim();

            if (!predictions.matches[matchId]) {
                predictions.matches[matchId] = { scoreA: '', scoreB: '' };
            }

            if (team === 'A') {
                predictions.matches[matchId].scoreA = val;
            } else {
                predictions.matches[matchId].scoreB = val;
            }

            // CSS styling feedback
            const card = document.getElementById(`match-card-${matchId}`);
            const otherVal = team === 'A' ? predictions.matches[matchId].scoreB : predictions.matches[matchId].scoreA;
            if (card) {
                if (val !== '' && otherVal !== '') {
                    card.classList.add('predicted');
                } else {
                    card.classList.remove('predicted');
                }
            }

            saveState();
            calculateGroupStandings();
            
            // Re-render to show active buttons if user manually typed 0, 1, 2, 3
            renderMatches();
        });
    });

    // Bind quick score button clicks
    matchGrid.querySelectorAll('.q-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const container = e.target.closest('.quick-scores');
            const matchId = container.dataset.matchId;
            const team = container.dataset.team;
            const val = e.target.dataset.val;

            if (!predictions.matches[matchId]) {
                predictions.matches[matchId] = { scoreA: '', scoreB: '' };
            }

            if (team === 'A') {
                predictions.matches[matchId].scoreA = val;
            } else {
                predictions.matches[matchId].scoreB = val;
            }

            saveState();
            calculateGroupStandings();
            renderMatches(); // Re-render this view to show active buttons immediately!
        });
    });

    // Bind pin button clicks
    matchGrid.querySelectorAll('.pin-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const matchId = e.target.closest('.pin-btn').dataset.matchId;
            if (!predictions.matches[matchId]) {
                predictions.matches[matchId] = { scoreA: '', scoreB: '', pinned: false };
            }
            predictions.matches[matchId].pinned = !predictions.matches[matchId].pinned;
            saveState();
            renderMatches();
        });
    });
}

// Render Group Standings Tab
function renderStandings() {
    // Render 12 Group Tables
    groupsContainer.innerHTML = Object.keys(groupStandings).map(groupLetter => {
        const teams = groupStandings[groupLetter];
        
        return `
            <div class="group-card">
                <div class="group-title">
                    <span>${t('group_prefix')} ${groupLetter}</span>
                    <span style="font-size: 0.8rem; font-weight: 500; color: var(--text-muted);">${t('points_table')}</span>
                </div>
                <div class="table-wrapper">
                    <table class="standings-table">
                        <thead>
                            <tr>
                                <th style="width: 25px;">#</th>
                                <th>${t('th_team')}</th>
                                <th class="center" style="width: 30px;">${t('th_p')}</th>
                                <th class="center" style="width: 30px;">${t('th_w')}</th>
                                <th class="center" style="width: 30px;">${t('th_d')}</th>
                                <th class="center" style="width: 30px;">${t('th_l')}</th>
                                <th class="center" style="width: 35px;">${t('th_gd')}</th>
                                <th class="center" style="width: 35px;">${t('th_gf')}</th>
                                <th class="center" style="width: 40px;">${t('th_pts')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${teams.map((team, idx) => {
                                let qualifyClass = '';
                                if (idx < 2) qualifyClass = 'qualify-top';
                                else if (idx === 2) qualifyClass = 'qualify-third';
                                
                                return `
                                    <tr class="${qualifyClass}">
                                        <td class="center font-weight-bold" style="color: var(--text-muted);">${idx + 1}</td>
                                        <td class="team-cell">
                                            <span>${team.flag}</span>
                                            <span class="team-name" title="${team.name}">${t(team.name, 'teams')}</span>
                                        </td>
                                        <td class="center">${team.played}</td>
                                        <td class="center">${team.won}</td>
                                        <td class="center">${team.drawn}</td>
                                        <td class="center">${team.lost}</td>
                                        <td class="center" style="color: ${team.gd > 0 ? 'var(--primary)' : team.gd < 0 ? 'var(--accent-red)' : 'inherit'}">
                                            ${team.gd > 0 ? '+' : ''}${team.gd}
                                        </td>
                                        <td class="center">${team.gf}</td>
                                        <td class="center pts-cell">${team.pts}</td>
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }).join('');

    // Render Third Place Comparison Table
    thirdPlaceBody.innerHTML = thirdPlaceRankings.map((team, idx) => {
        const isQualifying = idx < 8; // Top 8 third-place teams qualify
        const qualifyClass = isQualifying ? 'qualify-top' : 'eliminated';
        
        return `
            <tr class="${qualifyClass}" style="${!isQualifying ? 'border-left: 3px solid var(--accent-red); opacity: 0.6;' : 'border-left: 3px solid var(--primary);'}">
                <td class="center" style="font-weight: 700;">${idx + 1}</td>
                <td class="center font-weight-bold" style="color: var(--accent-gold);">${t('group_prefix')} ${team.group}</td>
                <td class="team-cell">
                    <span>${team.flag}</span>
                    <span class="team-name">${t(team.name, 'teams')}</span>
                </td>
                <td class="center">${team.played}</td>
                <td class="center">${team.won}</td>
                <td class="center">${team.drawn}</td>
                <td class="center">${team.lost}</td>
                <td class="center">${team.gd > 0 ? '+' : ''}${team.gd}</td>
                <td class="center">${team.gf}</td>
                <td class="center pts-cell">${team.pts}</td>
            </tr>
        `;
    }).join('');
}

// Render Knockout Bracket Tab
function renderBracket() {
    const rounds = [
        { name: currentLanguage === 'zh' ? '32强赛' : 'Round of 32', key: 'r32' },
        { name: currentLanguage === 'zh' ? '16强赛' : 'Round of 16', key: 'r16' },
        { name: currentLanguage === 'zh' ? '四分之一决赛' : 'Quarter-finals', key: 'qf' },
        { name: currentLanguage === 'zh' ? '半决赛' : 'Semi-finals', key: 'sf' },
        { name: currentLanguage === 'zh' ? '三四名决赛 & 决赛' : 'Final & 3rd Place', key: 'final_stage' },
        { name: currentLanguage === 'zh' ? '冠军' : 'Champion', key: 'champion' }
    ];

    bracketContainer.innerHTML = rounds.map(r => {
        // Special render for champion column
        if (r.key === 'champion') {
            const finalMatch = knockoutMatches.find(m => m.id === 'KO32');
            const champion = getKnockoutWinner(finalMatch);
            const flag = TEAM_FLAGS[champion] || '';
            
            return `
                <div class="bracket-round">
                    <div class="round-header">🏆 ${currentLanguage === 'zh' ? '冠军' : 'CHAMPION'}</div>
                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; gap: 1rem;">
                        ${champion ? `
                            <div style="font-size: 5rem; animation: pulse-gold 3s infinite ease-in-out;">👑</div>
                            <div style="font-size: 3rem; line-height: 1;">${flag}</div>
                            <h2 style="color: var(--accent-gold); font-size: 1.5rem; font-weight: 800; text-align: center; text-transform: uppercase;">${t(champion, 'teams')}</h2>
                        ` : `
                            <div style="font-size: 4rem; opacity: 0.2;">🏆</div>
                            <p style="color: var(--text-muted); font-size: 0.85rem; font-style: italic; text-align: center; padding: 0 1rem;">${t('crown_champion_desc')}</p>
                        `}
                    </div>
                </div>
            `;
        }

        // Special logic for Final stage column, including both Final and 3rd Place matches
        let matchesInRound = [];
        if (r.key === 'final_stage') {
            matchesInRound = knockoutMatches.filter(m => m.type === 'final' || m.type === 'third_place');
        } else {
            matchesInRound = knockoutMatches.filter(m => m.type === r.key);
        }

        return `
            <div class="bracket-round">
                <div class="round-header">${r.name}</div>
                <div class="bracket-matches">
                    ${matchesInRound.map(match => {
                        const teamA = resolveKnockoutTeam(match.sourceA);
                        const teamB = resolveKnockoutTeam(match.sourceB);
                        
                        const pred = predictions.knockout[match.id] || { scoreA: '', scoreB: '', penA: '', penB: '' };
                        const winner = getKnockoutWinner(match);

                        const isTie = pred.scoreA !== '' && pred.scoreB !== '' && parseInt(pred.scoreA, 10) === parseInt(pred.scoreB, 10);
                        const matchLabel = currentLanguage === 'zh' ? `${match.label.replace('Match ', '')}场` : match.label;
                        
                        const kickoffDate = new Date(match.datetime);
                        const now = new Date();
                        const isLocked = now > kickoffDate;

                        return `
                            <div class="ko-match-card">
                                <div class="ko-match-header">
                                    <div style="display: flex; align-items: center; gap: 0.25rem;">
                                        <span class="ko-match-id">${matchLabel}${isLocked ? ' 🔒' : ''}</span>
                                        ${teamA && teamB && !isLocked ? `
                                            <button class="pin-btn ${pred.pinned ? 'pinned' : ''}" data-ko-id="${match.id}" title="${pred.pinned ? t('unpin_match') : t('pin_match')}">📌</button>
                                        ` : ''}
                                    </div>
                                    <span style="color: var(--text-muted); font-size: 0.6rem;">${t(match.city, 'cities')}, ${t(CITY_COUNTRIES[match.city], 'countries')}</span>
                                </div>

                                <!-- Team A -->
                                <div class="ko-team-row ${winner && winner === teamA ? 'winner' : ''}">
                                    <div class="ko-team-info">
                                        ${teamA ? `
                                            <span class="team-flag">${TEAM_FLAGS[teamA] || '🏳️'}</span>
                                            <span class="team-name">${t(teamA, 'teams')}</span>
                                        ` : `
                                            <span class="ko-team-placeholder">${getPlaceholderLabel(match.sourceA)}</span>
                                        `}
                                    </div>
                                    ${teamA && teamB ? `
                                        <div class="score-selector-wrapper">
                                            <div class="quick-scores compact" data-ko-id="${match.id}" data-team="A">
                                                <button class="q-btn ${pred.scoreA === '0' ? 'active' : ''}" data-val="0" ${isLocked ? 'disabled' : ''}>0</button>
                                                <button class="q-btn ${pred.scoreA === '1' ? 'active' : ''}" data-val="1" ${isLocked ? 'disabled' : ''}>1</button>
                                                <button class="q-btn ${pred.scoreA === '2' ? 'active' : ''}" data-val="2" ${isLocked ? 'disabled' : ''}>2</button>
                                                <button class="q-btn ${pred.scoreA === '3' ? 'active' : ''}" data-val="3" ${isLocked ? 'disabled' : ''}>3</button>
                                            </div>
                                            <input type="number" min="0" class="score-input" style="width: 32px; height: 26px; font-size: 0.85rem;" 
                                                   value="${pred.scoreA !== undefined ? pred.scoreA : ''}"
                                                   data-ko-id="${match.id}" 
                                                   data-team="A" 
                                                   id="ko-${match.id}-A"
                                                   placeholder="-"
                                                   ${isLocked ? 'disabled' : ''}>
                                        </div>
                                    ` : ''}
                                </div>

                                <!-- Team B -->
                                <div class="ko-team-row ${winner && winner === teamB ? 'winner' : ''}">
                                    <div class="ko-team-info">
                                        ${teamB ? `
                                            <span class="team-flag">${TEAM_FLAGS[teamB] || '🏳️'}</span>
                                            <span class="team-name">${t(teamB, 'teams')}</span>
                                        ` : `
                                            <span class="ko-team-placeholder">${getPlaceholderLabel(match.sourceB)}</span>
                                        `}
                                    </div>
                                    ${teamA && teamB ? `
                                        <div class="score-selector-wrapper">
                                            <div class="quick-scores compact" data-ko-id="${match.id}" data-team="B">
                                                <button class="q-btn ${pred.scoreB === '0' ? 'active' : ''}" data-val="0" ${isLocked ? 'disabled' : ''}>0</button>
                                                <button class="q-btn ${pred.scoreB === '1' ? 'active' : ''}" data-val="1" ${isLocked ? 'disabled' : ''}>1</button>
                                                <button class="q-btn ${pred.scoreB === '2' ? 'active' : ''}" data-val="2" ${isLocked ? 'disabled' : ''}>2</button>
                                                <button class="q-btn ${pred.scoreB === '3' ? 'active' : ''}" data-val="3" ${isLocked ? 'disabled' : ''}>3</button>
                                            </div>
                                            <input type="number" min="0" class="score-input" style="width: 32px; height: 26px; font-size: 0.85rem;" 
                                                   value="${pred.scoreB !== undefined ? pred.scoreB : ''}"
                                                   data-ko-id="${match.id}" 
                                                   data-team="B" 
                                                   id="ko-${match.id}-B"
                                                   placeholder="-"
                                                   ${isLocked ? 'disabled' : ''}>
                                        </div>
                                    ` : ''}
                                </div>

                                <!-- Penalty Shootout UI if tied -->
                                ${isTie ? `
                                    <div class="penalty-ui">
                                        <span class="penalty-label">PSO:</span>
                                        <input type="number" min="0" class="penalty-input" 
                                               value="${pred.penA || ''}" 
                                               data-ko-id="${match.id}" 
                                               data-pen="A" 
                                               placeholder="P"
                                               ${isLocked ? 'disabled' : ''}>
                                        <span class="score-divider">-</span>
                                        <input type="number" min="0" class="penalty-input" 
                                               value="${pred.penB || ''}" 
                                               data-ko-id="${match.id}" 
                                               data-pen="B" 
                                               placeholder="P"
                                               ${isLocked ? 'disabled' : ''}>
                                    </div>
                                ` : ''}

                                <div style="font-size: 0.6rem; color: var(--text-muted); text-align: right; border-top: 1px solid rgba(255, 255, 255, 0.03); padding-top: 0.25rem;">
                                    ${formatMatchTime(match.datetime, timezoneMode, match.city)}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');

    // Bind event listeners for knockout score inputs
    bracketContainer.querySelectorAll('.score-input').forEach(input => {
        input.addEventListener('input', (e) => {
            const koId = e.target.dataset.koId;
            const team = e.target.dataset.team;
            const val = e.target.value.trim();

            if (!predictions.knockout[koId]) {
                predictions.knockout[koId] = { scoreA: '', scoreB: '', penA: '', penB: '' };
            }

            if (team === 'A') {
                predictions.knockout[koId].scoreA = val;
            } else {
                predictions.knockout[koId].scoreB = val;
            }

            saveState();
            // Re-render only bracket because scores flow down the tree dynamically
            renderBracket();
        });
    });

    // Bind event listeners for knockout penalty inputs
    bracketContainer.querySelectorAll('.penalty-input').forEach(input => {
        input.addEventListener('input', (e) => {
            const koId = e.target.dataset.koId;
            const penTeam = e.target.dataset.pen;
            const val = e.target.value.trim();

            if (!predictions.knockout[koId]) {
                predictions.knockout[koId] = { scoreA: '', scoreB: '', penA: '', penB: '' };
            }

            if (penTeam === 'A') {
                predictions.knockout[koId].penA = val;
            } else {
                predictions.knockout[koId].penB = val;
            }

            saveState();
            renderBracket();
        });
    });

    // Bind quick score button clicks for knockouts
    bracketContainer.querySelectorAll('.q-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const container = e.target.closest('.quick-scores');
            const koId = container.dataset.koId;
            const team = container.dataset.team;
            const val = e.target.dataset.val;

            if (!predictions.knockout[koId]) {
                predictions.knockout[koId] = { scoreA: '', scoreB: '', penA: '', penB: '' };
            }

            if (team === 'A') {
                predictions.knockout[koId].scoreA = val;
            } else {
                predictions.knockout[koId].scoreB = val;
            }

            // If the scores are not tied anymore, clear penalties
            const scoreA = team === 'A' ? val : predictions.knockout[koId].scoreA;
            const scoreB = team === 'B' ? val : predictions.knockout[koId].scoreB;
            if (scoreA !== scoreB) {
                predictions.knockout[koId].penA = '';
                predictions.knockout[koId].penB = '';
            }

            saveState();
            renderBracket(); // Re-render bracket to update paths and active buttons!
        });
    });

    // Bind pin button clicks for knockout matches
    bracketContainer.querySelectorAll('.pin-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const koId = e.target.closest('.pin-btn').dataset.koId;
            if (!predictions.knockout[koId]) {
                predictions.knockout[koId] = { scoreA: '', scoreB: '', penA: '', penB: '', pinned: false };
            }
            predictions.knockout[koId].pinned = !predictions.knockout[koId].pinned;
            saveState();
            renderBracket();
        });
    });
}

// Generate human-friendly label for placeholders (e.g. Winner Group A)
function getPlaceholderLabel(source) {
    if (!source) return '';
    if (source.type === 'winner') return `Winner Group ${source.group}`;
    if (source.type === 'runnerup') return `Runner-up Group ${source.group}`;
    if (source.type === 'third') return `3rd Place Team ${source.index + 1}`;
    if (source.type === 'ko_winner') return `Winner Match ${source.matchId.replace('KO', '')}`;
    if (source.type === 'ko_loser') return `Loser Match ${source.matchId.replace('KO', '')}`;
    return 'TBD';
}

// Kickstart application
init();
