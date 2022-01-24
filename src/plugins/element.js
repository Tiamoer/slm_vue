import {
	ElButton,
	ElForm,
	ElFormItem,
	ElInput,
	ElRow,
	ElCol,
	ElMessage,
	ElTabs,
	ElTabPane,
	ElSwitch,
	ElDivider,
	ElTooltip,
	ElNotification,
	ElContainer,
	ElHeader,
	ElAside,
	ElMain,
	ElFooter,
	ElAvatar,
	ElMenu,
	ElSubmenu,
	ElIcon,
	ElMenuItemGroup,
	ElMenuItem,
	ElLink,
	ElBacktop,
	ElCard,
	ElRate,
	ElScrollbar
} from 'element-plus'

import {
	Location,
	Edit
} from "@element-plus/icons";

export default (app) => {

	app.use(ElButton)
	app.use(ElForm)
	app.use(ElFormItem)
	app.use(ElInput)
	app.use(ElRow)
	app.use(ElCol)
	app.use(ElTabs)
	app.use(ElTabPane)
	app.use(ElSwitch)
	app.use(ElDivider)
	app.use(ElTooltip)
	app.use(ElHeader)
	app.use(ElAside)
	app.use(ElMain)
	app.use(ElContainer)
	app.use(ElFooter)
	app.use(ElAvatar)
	app.use(ElMenu)
	app.use(ElIcon)
	app.use(ElMenuItemGroup)
	app.use(ElMenuItem)
	app.use(ElSubmenu)
	app.use(ElLink)
	app.use(ElBacktop)
	app.use(ElCard)
	app.use(ElRate)
	app.use(ElScrollbar)

	// 图标组件注册
	app.component('location', Location)
	app.component('edit', Edit)

	app.config.globalProperties.$message = ElMessage
	app.config.globalProperties.$notify = ElNotification
}
