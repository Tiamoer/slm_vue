import { ElButton } from 'element-plus'
import { ElForm, ElFormItem} from 'element-plus'
import { ElInput } from 'element-plus'

export default (app) => {
  app.use(ElButton)
  app.use(ElForm)
  app.use(ElFormItem)
  app.use(ElInput)
}
