const { defaultTheme } = require('vuepress')
const { gitPlugin } = require('@vuepress/plugin-git')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
    lang: 'en-US',
    title: 'Odoo Development',
    description: 'The Mint System Odoo development environment.',
    pagePatterns: ['**/*.md', '!.vuepress', '!node_modules', '!addons', '!odoo', '!enterprise','!tmp', '!oca'],
    theme: defaultTheme({
        logo: '/icon.png',
        repo: 'mint-system/odoo-development',
        docsBranch: '14.0',
        editLink: true,
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'Help', link: '/task' },
            { text: 'Snippets', link: '/snippets' },
            { text: 'Mint System', link: 'https://www.mint-system.ch' }
        ],
    }),
    plugins: [
        searchPlugin(),
    ],
}

// module.exports = {
//     title: 'Odoo Development',
//     description: 'The Mint System Odoo development environment.',
//     head: [
//         ['link', { rel: "icon", type: "image/png", href: "icon.png" }],
//     ],
//     themeConfig: {
//         logo: '/icon.png',
//         sidebar: {
//             '/snippets/': [
//                 'account',
//                 'agreement',
//                 'agreement_legal',
//                 'base',
//                 'business_requirement',
//                 'calendar',
//                 'certificate_planer',
//                 'crm',
//                 'crm_iap_lead_enrich',
//                 'delivery',
//                 'digest',
//                 'gio_payroll_custom',
//                 'hr_attendance',
//                 'hr_holidays_calendar',
//                 'hr_holidays_delegations',
//                 'hr_holidays',
//                 'hr',
//                 'hr_payroll',
//                 'hr_timesheet',
//                 'hr',
//                 'ir_model',
//                 'ir_ui_view',
//                 'l10n_ch',
//                 'mail_activity_board',
//                 'mail',
//                 'mrp',
//                 'mrp_workorder',
//                 'printnode_base',
//                 'product',
//                 'project',
//                 'purchase',
//                 'purchase_requisition',
//                 'purchase',
//                 'res_groups',
//                 'sale_blanket_order',
//                 'sale_management',
//                 'sale_order_contact_person',
//                 'sale_order_line_date',
//                 'sale_order_picking_note',
//                 'sale_partner_incoterm',
//                 'sale',
//                 'stock_delivery_note',
//                 'stock',
//                 'timesheet_grid',
//                 'web',
//                 'website_discount_voucher',
//                 'website_sale',
//                 'web',
//             ],
//             '/': 'auto',
//         },
//         repo: 'mint-system/odoo-development',
//         docsBranch: '14.0',
//         editLink: true,
//         nav: [
//             { text: 'Home', link: '/' },
//             { text: 'Help', link: '/task' },
//             { text: 'Snippets', link: '/snippets' },
//             { text: 'Mint System', link: 'https://www.mint-system.ch' }
//         ],
//     },
//     dest: 'public',
// }
