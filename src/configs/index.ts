import { htmlContainers, htmlNonContainers } from './htmlCategory';
import { reactContainers, reactNonContainers } from './reactCategory';
import * as Ants from 'antd/es';
import { ConfigType } from '@/types/ConfigTypes';
import AllComponentConfigs from './componentConfigs';

/**
 * 原始组件集
 */
const OriginalComponents = Ants;

/**
 * 容器组件分类
 */
const CONTAINER_CATEGORY = { ...reactContainers, ...htmlContainers };
/**
 * 非容器组件分类
 * @type {{Input, InputNumber, Slider, Checkbox, Rate, Radio, Icon, Typography}}
 */
const NON_CONTAINER_CATEGORY = { ...reactNonContainers,...htmlNonContainers };

/**
 * 属性节点不可为空的组件
 */
const propsNodeNonemptyComponents = [
  'Tabs',
  'Dropdown',
  'Select'
];



const config:ConfigType={
  OriginalComponents,
  AllComponentConfigs,
  CONTAINER_CATEGORY,
  NON_CONTAINER_CATEGORY,
  propsNodeNonemptyComponents
}

export default config
