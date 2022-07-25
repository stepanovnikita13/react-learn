import { create as createJss } from 'jss'
import camelCase from 'jss-plugin-camel-case'
import defaultUnit from 'jss-plugin-default-unit'
import expand from 'jss-plugin-expand'
import extend from 'jss-plugin-extend'
import global from 'jss-plugin-global'
import nested from 'jss-plugin-nested'
import ruleValueFunction from 'jss-plugin-rule-value-function'
import createStyled from 'styled-jss/createStyled'

const options = {
	'font-size': 'em',
	'line-height': 'em',
}
export const jss = createJss()
jss.use(camelCase(), global(), extend(), nested(), expand(), ruleValueFunction(), defaultUnit(options))


export const Styled = createStyled(jss)

const styled = Styled()

export default styled