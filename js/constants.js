(function(app) {
    'use strict';
    app.constants = {
        CSV_URL: "https://raw.githubusercontent.com/akarimvand/SAPRA2/refs/heads/main/DATA.CSV",
        ITEMS_CSV_URL: "https://raw.githubusercontent.com/akarimvand/SAPRA2/refs/heads/main/ITEMS.CSV",
        PUNCH_CSV_URL: "https://raw.githubusercontent.com/akarimvand/SAPRA2/refs/heads/main/PUNCH.CSV",
        HOLD_POINT_CSV_URL: "https://raw.githubusercontent.com/akarimvand/SAPRA2/refs/heads/main/HOLD_POINT.CSV",
        COLORS_STATUS_CHARTJS: {
            done: 'rgba(28, 132, 252, 0.8)',     // Vibrant blue
            pending: 'rgba(173, 216, 230, 0.8)', // Light blue
            remaining: 'rgba(211, 211, 211, 0.8)' // Light gray
        },
        COLORS_ISSUES_CHARTJS: {
            punch: 'rgba(255, 159, 64, 0.8)', // Orange/Amber
            hold: 'rgba(255, 99, 132, 0.8)'   // Soft Red
        },
        ICONS: {
            Collection: '<span class="material-icons">collections</span>',
            Folder: '<span class="material-icons">folder</span>',
            Puzzle: '<span class="material-icons">extension</span>',
            ChevronRight: '<span class="material-icons chevron-toggle">chevron_right</span>',
            CheckCircle: '<span class="material-icons">check_circle</span>',
            Clock: '<span class="material-icons">schedule</span>',
            ArrowRepeat: '<span class="material-icons">loop</span>',
            ExclamationTriangle: '<span class="material-icons">warning</span>',
            FileEarmarkText: '<span class="material-icons">article</span>',
            FileEarmarkCheck: '<span class="material-icons">fact_check</span>',
            FileEarmarkMedical: '<span class="material-icons">assignment_late</span>',
            FileEarmarkSpreadsheet: '<span class="material-icons">request_page</span>',
            PieChartIcon: '<span class="material-icons" style="font-size: 2rem;">pie_chart</span>'
        }
    };
})(window.SAPRA_APP);
