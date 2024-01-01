const DangerouslySetInnerHTML = () => {
  // pdf可以预览
  //   const htmlCode =
  //     '<iframe src="https://sitecdn.zcycdn.com/1167DH/202312/f3244f76-c07f-44bf-87a7-6f358cdae8f1.pdf"></iframe>';

  // 压缩包链接直接下载
  //   const htmlCode =
  //     '<iframe src="https://sitecdn.zcycdn.com/1167DH/202312/ed099dd9-5044-499c-b142-6048b06db48a.zip"></iframe>';

  // 图片可以预览
  //   const htmlCode =
  //     '<iframe src="https://sitecdn.zcycdn.com/1167DH/202312/1032c143-d016-416a-80b7-90c1a7f4bcd8.png"></iframe>';

  // json文件可以预览
  //   const htmlCode =
  //     '<iframe src="https://sitecdn.zcycdn.com/1167DH/202312/0f1f9961-f78a-4f4a-8085-9b79b74ce437.json"></iframe>';

  // txt可预览
  //   const htmlCode =
  //     '<iframe src="https://sitecdn.zcycdn.com/1167DH/202312/dfa0f8ac-28a1-40e6-8528-303720ef3129.txt"></iframe>';

  // docs直接下载
  const htmlCode =
    '<iframe src="https://sitecdn.zcycdn.com/1167DH/202312/8bd4b3ec-a504-4f9e-b5d8-de995437a0fb.docx"></iframe>';

  // const htmlCode =
  // '<iframe src="https://sitecdn.zcycdn.com/1167DH/202312/0f1f9961-f78a-4f4a-8085-9b79b74ce437.json"></iframe>';

  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: htmlCode,
        }}
      ></div>
    </>
  );
};
export default DangerouslySetInnerHTML;
