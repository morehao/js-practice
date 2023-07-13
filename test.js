const tagValue = {
  '公司': 'a1',
  '部门': 'b1'
};
const priority = {
  '公司': 1,
  '部门': 2
};

const configs1 = [];

const configs = [
  {
    _id: 1,
    tags: {
      '公司': 'a1',
      '部门': 'b1'
    },
    version: 1
  },
  {
    _id: 2,
    tags: {
      '公司': 'a1'
    }
  },
  {
    _id: 3,
    tags: {
      '公司': 'a2'
    }
  },
  {
    _id: 4,
    tags: {
      '部门': 'b1'
    }
  },
  {
    _id: 5,
    tags: {
      '部门': 'b2'
    }
  },
  {
    _id: 6,
    tags: {
      '公司': 'a1',
      '部门': 'b1'
    },
    version: 2
  }
]
function getFinalConfig () {
  const tagsArr = configs.map(item=> {
    return { tags: item.tags, _id: item._id.toString(), weight: 0 }
  })
  tagsArr.forEach(item => {
    for(let k in item.tags) {
      const compareResult = tagValue[k] === item.tags[k] ? 1 : 0;
      item.weight += compareResult ? Math.pow(10, priority[k]) : Math.pow(10, compareResult);
    }
  });
  console.log('tagsArr:', tagsArr);
  tagsArr.sort((a, b)=> {
    return b.weight - a.weight;
  })
  console.log('sortTagsArr:', tagsArr);
  const filterConfigs = configs.filter(item => {
    return item._id.toString() === tagsArr[0]._id.toString();
  });
  return filterConfigs[0];
}
console.log(getFinalConfig());

const uniqueTagsMap = {};
configs.forEach(item => {
  if (!uniqueTagsMap[JSON.stringify(item.tags)]) {
    uniqueTagsMap[JSON.stringify(item.tags)] = {
      tags: item.tags,
      list: [{ tags: item.tags, _id: item._id.toString(), weight: 0 }]
    }
  } else {
    uniqueTagsMap[JSON.stringify(item.tags)].list.push({ tags: item.tags, _id: item._id.toString(), weight: 0 })
  };
  return uniqueTagsMap;
})
console.log('uniqueTagsMap:', uniqueTagsMap)

const nums = [1, 2, 3, 6, 10, 9, 8, 5];

function getIndex(arr, target) {
  const map = new Map();
  let result;
  for (const index in arr) {
    if (map.has(target - arr[index])) {
      result = [index, map.get(target - arr[index])]
      break;
    }
    map.set(arr[index], index)
  }
  return result;
}
console.log(getIndex(nums, 12));