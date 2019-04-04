import * as webapi from '../webapi'

export const getClockRecordList = userCode => async dispatch => {
  const clockRecordList = await webapi.getClockRecordList({ userCode })
  dispatch({
    type: 'getList',
    clockRecordList
  })
}
