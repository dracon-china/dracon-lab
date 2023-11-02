import { Avatar, Card, List, Tooltip, Typography } from 'antd';
import React from 'react';

export default function ({ children }: { children: React.ReactNode[] }) {
  const elements = children.filter((child: any) => child?.type === 'a');
  const data = elements.map((element: any) => {
    const href = element?.props?.href;
    const imgElE = element?.props?.children.find((child: any) => child?.type === 'img');
    const icon = imgElE?.props?.src;
    const divElE = element?.props?.children.find((child: any) => child?.type === 'div');
    const pElE = divElE?.props?.children.filter((child: any) => child?.type === 'p');
    const title = pElE[0].props.children;
    const description = pElE[1].props.children;
    return {
      icon,
      title,
      description,
      href,
    };
  });

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 1,
        md: 1,
        lg: 3,
        xl: 3,
        xxl: 3,
      }}
      style={{
        gap: 16,
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          style={{
            height: '100%',
            width: '100%',
          }}
          colStyle={{
            height: '100%',
            width: '100%',
          }}
          onClick={() => window.open(item.href, '_blank')}
        >
          <Tooltip overlay={item.description} placement="bottom">
            <Card
              style={{
                height: 'calc(100% - 16px)',
                width: '100%',
                cursor: 'pointer',
              }}
              size="small"
              hoverable={true}
            >
              <Card.Meta
                avatar={
                  <Avatar
                    src={item.icon}
                    size="large"
                    style={{
                      marginTop: 8,
                    }}
                  >
                    {item.title}
                  </Avatar>
                }
                title={item.title}
                description={<Typography.Text ellipsis>{item.description}</Typography.Text>}
              />
            </Card>
          </Tooltip>
        </List.Item>
      )}
    ></List>
  );
}
