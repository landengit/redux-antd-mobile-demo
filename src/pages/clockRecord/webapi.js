import { Fetch } from '../common'

/**
 * 查询打卡记录
 */
export async function getClockRecordList(params) {
  params.getMockData = true;
  return Fetch.get(`/employee/web/employee/searchEmployee`, params)
}
