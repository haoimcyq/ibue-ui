var __MENU__ = [
    { component: '栅格系统', en: 'Grid', icon: '', alink: './grid.html' },
    { component: '布局', en: 'Layout', icon: '', alink: './layout.html' },
    { component: '按钮', en: 'Button', icon: '', alink: './buttons.html' },
    { component: '徽标', en: 'Badge', icon: '', alink: './badges.html' },
    { component: '标签', en: 'Label', icon: '', alink: './labels.html' },
    { component: '表单', en: 'Form', icon: '', alink: './forms.html' },
    { component: '单选框', en: 'Radio', icon: '', alink: './radios.html' },
    { component: '多选框', en: 'Checkbox', icon: '', alink: './checkboxs.html' },
    { component: '路径导航', en: 'Breadcrumb', icon: '', alink: './breadcrumb.html' },
    { component: '卡片', en: 'Card', icon: '', alink: './cards.html' },
    { component: '折叠', en: 'Collapse', icon: '', alink: './collapse.html' },
    { component: '表格', en: 'Table', icon: '', alink: './table.html' },
    { component: '步骤条', en: 'Step', icon: '', alink: './steps.html' },
    { component: '导航', en: 'Nav', icon: '', alink: './nav.html' },
    { component: '列表', en: 'List', icon: '', alink: './list.html' },
    { component: '警告框', en: 'Alert', icon: '', alink: './alerts.html' },
    { component: '对话框', en: 'Modal', icon: '', alink: './modals.html' },
    { component: '选项卡', en: 'Tab', icon: '', alink: './tab.html' },
    { component: '头像', en: 'Avatar', icon: '', alink: './avatars.html' },
    { component: '时间轴', en: 'Timeline', icon: '', alink: './timeline.html' },
    { component: '抽屉', en: 'Drawer', icon: '', alink: './grid.html' },
    { component: '文字提示', en: 'Tooltip', icon: '', alink: './tooltips.html' },
    { component: '开关', en: 'Switch', icon: '', alink: './switchs.html' },
    { component: '上传', en: 'Upload', icon: '', alink: './grid.html' },
    { component: '工具类', en: 'Utils', icon: '', alink: './grid.html' },
    { component: '案例', en: 'Examples', icon: '', alink: './examples.html' },
];

$(function() {
    var html = '<ul class="list is-hovered sidebar">';
    
    $.each(__MENU__, function(index, value) {
        html += '<li class="item"><a href="'+ value.alink +'"><span>'+ value.en +'</span>&nbsp;&nbsp;<span>'+ value.component +'</span></a></li>'
    });
    html += '</ul>';

    $(html).appendTo($('#nav'))
});