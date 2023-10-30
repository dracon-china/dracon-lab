import GiscusComponent from '@giscus/react';
import { useThemeMode } from 'antd-style';
import { useSiteData } from 'dumi';
import ContentFooter from 'dumi-theme-antd-style/dist/slots/ContentFooter';
import { memo } from 'react';

export default memo(() => {
  const { isDarkMode } = useThemeMode();
  const { themeConfig } = useSiteData();
  const { giscus } = themeConfig;

  return (
    <>
      <GiscusComponent
        emitMetadata="0"
        id="giscus"
        inputPosition="top"
        loading="lazy"
        mapping="title"
        reactionsEnabled="1"
        category="Q&A"
        categoryId="DIC_kwDOKlvNcs4Cae6g"
        repo="draco-china/draco-lab"
        repoId="R_kgDOKlvNcg"
        theme={isDarkMode ? 'dark_protanopia' : 'light_protanopia'}
        {...giscus}
      />
      <ContentFooter />
    </>
  );
});
