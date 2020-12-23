import { Endpoint, Request } from 'bmo-rest-client'

const Service = {
  // getHotList: Endpoint(Request.GET, '/moldata/data/subtype?type=countrydetail'),
  getAllList: Endpoint(Request.POST, '/moldata-api/country/common/search/v1')
}

export default Service
