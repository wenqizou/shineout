/**
 * cn - 选择月
 * en - Month Type
 */
import React from 'react'
import { DatePicker } from 'shineout'

export default function () {
  return (
    <DatePicker type="month" defaultValue={Date.now()} />
  )
}