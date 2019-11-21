import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from '../Checkbox'
import { PureComponent } from '../component'
import { transferClass } from '../styles'
import Context from './context'

class Card extends PureComponent {
  constructor(props) {
    super(props)
    this.check = this.check.bind(this)
  }

  check(c) {
    const { index, selecteds, checkKey, setSelecteds } = this.props
    if (c) {
      setSelecteds(index, [...selecteds[index], checkKey])
    } else {
      setSelecteds(index, selecteds[index].filter(ch => ch !== checkKey))
    }
  }

  render() {
    const { content, selecteds, checkKey, index, disabled } = this.props
    return (
      <div className={transferClass('item', disabled && 'item-disabled')}>
        <Checkbox onChange={this.check} disabled={disabled} checked={selecteds[index].indexOf(checkKey) > -1}>
          {content}
        </Checkbox>
      </div>
    )
  }
}

Card.propTypes = {
  index: PropTypes.number,
  selecteds: PropTypes.array,
  checkKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  setSelecteds: PropTypes.func,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
}

export default prop => (
  <Context.Consumer>
    {value => <Card {...prop} selecteds={value.selecteds} setSelecteds={value.setSelecteds} />}
  </Context.Consumer>
)