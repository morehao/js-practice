/**
* @param {Object} lists 所有数据
* @param {Object} keyWord 查询的关键词
*/
function selectMatchItem(obj, keyWord) {
  let resArr = [];
  for (const key in obj) {
    if (obj[key].includes(keyWord)) resArr.push(obj[key]);
  }
  // lists.forEach(item => {
  //   if (item.tax_classification_name.includes(keyWord)) resArr.push(item);
  // })
  return resArr;
}

const list = [
  {
      tax_classification_code: "1000000000000000000",
      tax_classification_name: "货物"
  },
  {
    tax_classification_code: "1000000000000000000",
    tax_classification_name: "货物"
  },
  {
    tax_classification_code: "1000000000000000000",
    tax_classification_name: "货物"
  },
  {
      tax_classification_code: "1010000000000000000",
      tax_classification_name: "农、林、牧、渔业类产品"
  }
]

const data = {
      "F1": "数通项目",
      "F2": "安全项目",
      "F3": "接入项目",
      "F4": "服务器项目",
      "F5": "存储项目",
      "F6": "UC项目",
      "F7": "数据中心能源项目",
      "F8": "传输项目",
      "F9": "云计算项目",
      "FA": "视讯项目",
      "FB": "视频监控项目",
      "FC": "其他（信息产品事业群）",
      "FD": "华为企业服务",
      "FE": "自有服务",
      "FX": "技术服务-其他",
      "H01": "IBM",
      "H02": "CISCO",
      "H03": "R&S",
      "H04": "百通",
      "H05": "ARUBA",
      "H06": "对外援助",
      "H07": "其他（合作业务）",
      "NF": "华为逆变器产品项目",
      "NR": "华为逆变器产品分销",
      "OF": "Office365项目",
      "OL": "Oracle项目",
      "OR": "Office365分销",
      "QF": "启明星辰安全产品项目",
      "QR": "启明星辰安全产品分销",
      "R1": "数通分销",
      "R2": "安全分销",
      "R3": "接入分销",
      "R4": "服务器分销",
      "R5": "存储分销",
      "R6": "UC分销",
      "R7": "数据中心能源分销",
      "SA": "SAP项目",
      "WF": "Windows Azure项目",
      "WR": "Windows Azure分销",
      "Y01": "GE",
      "Y02": "SIEMENS",
      "Y03": "SIEMENS检验",
      "Y04": "Philips",
      "Y05": "Barco",
      "Y06": "蝶和",
      "Y07": "圣犹达",
      "Y08": "史塞克",
      "Y09": "东芝",
      "Y10": "日立",
      "Y11": "欧桥",
      "Y12": "其他（医疗产品）"
}

console.log(selectMatchItem(data, '立'))


