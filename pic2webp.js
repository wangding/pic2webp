#!/usr/bin/env node

let cp  = require('child_process'),
      fs  = require('fs'),
      path = require('path'),
      log = console.log,
      info = [],
      srcDir = process.argv[2] || './images',
      dstDir = process.argv[3] || './dist';

// 需要判断命令行参数个数是否合法
// -h 或 --help 参数打印帮助信息
// 正常参数是：cmd srcDir dstDir

// 需要判断 srcDir 是否存在
const pics = fs.readdirSync(srcDir);

// 需要判断 pics 的每个 pic 是否是文件，目录忽略
for(let i=0; i<pics.length; i++) {
  // 需要判断 srcDir 是否为绝对路径
  let srcPic = path.join(process.cwd(), srcDir, pics[i]);
  let objPic = path.parse(srcPic),
      res = {};

  let dstPic = path.join(process.cwd(), dstDir, objPic.name + '.webp');

  //if(pic.res)
  res.picName = objPic.base;
  res.srcPicSize = fs.statSync(srcPic).size;

  switch (objPic.ext) {
    case '.png':
    case '.jpg':
      cp.execFileSync('cwebp', [srcPic, '-o', dstPic, '-quiet']);
      break;

    case '.gif':
      cp.execFileSync('gif2webp', [srcPic, '-o', dstPic, '-quiet']);
      break;

    default:
      return;
  }

  res.dstPicSize = fs.statSync(dstPic).size;
  res.save = res.srcPicSize - res.dstPicSize;
  res.isCompressed = res.dstPicSize < res.srcPicSize;
  info.push(res);
  process.stdout.write('.');
}

log();
console.table(info);
