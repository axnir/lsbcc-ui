import React, { useState, useMemo, useEffect, ReactElement } from 'react';
import { PaginationProps, OmitPageProps } from './interface';
import classNames from 'classnames';

const prefixCls = 'lsbcc-pagination';

const Pagination: React.FC<PaginationProps> = ({ pageSize, total = 0, onChange, current }) => {
  const [activePage, setActivePage] = useState(current);

  // 计算总页数
  const totalPagesCount = useMemo(() => Math.ceil(total / pageSize), [pageSize, total]);

  // 前进后退按钮的classnames
  const preBtnClasses = classNames('page', 'btn', {
    disabled: activePage < 2,
  });
  const nextBtnClasses = classNames('page', 'btn', {
    disabled: activePage > totalPagesCount - 1,
  });

  // 更新current
  useEffect(() => {
    setActivePage(current);
  }, [current]);

  // 存放的页码数组
  let contentList: ReactElement[] = [];

  // 点击左箭头向前移动1页
  const handlePrePageChange = (): boolean => {
    activePage > 1 && onChange(activePage - 1);
    return false;
  };

  // 点击右箭头向后移动1页
  const handleNextPageChange = (): boolean => {
    activePage < totalPagesCount && onChange(activePage + 1);
    return false;
  };

  // 点击页码的事件
  const handlePageChange = (page: number): void => {
    onChange(page);
  };

  // 点击省略号向前5页的事件
  const handlePreOmitPageChange = (): void => {
    onChange(activePage - 5);
  };

  // 点击省略号向后5页的事件
  const handleNextOmitPageChange = (): void => {
    onChange(activePage + 5);
  };

  // 省略号组件
  const OmitPage: React.FC<OmitPageProps> = ({ onClick }) => (
    <li onClick={onClick} className="page">
      <span>...</span>
    </li>
  );

  // 除去前进后退按钮的分页
  const renderPagination = (): ReactElement[] => {
    // 页数小于等于9不用显示省略号的情况
    if (totalPagesCount <= 9) {
      contentList = Array.from({ length: totalPagesCount }).map((_, index) => {
        const classes = classNames('page', {
          active: activePage === index + 1,
          disabled: activePage === index + 1,
        });

        return (
          <li
            className={classes}
            key={index + 1}
            onClick={(): void => {
              activePage !== index + 1 && handlePageChange(index + 1);
            }}
          >
            <span>{index + 1}</span>
          </li>
        );
      });
      // 只显示左侧省略号的情况
    } else if (current + 4 >= totalPagesCount) {
      const classes = classNames('page', {
        active: activePage === 1,
        disabled: activePage === 1,
      });

      contentList = [
        <li
          className={classes}
          key={1}
          onClick={(): void => {
            activePage !== 1 && handlePageChange(1);
          }}
        >
          <span>1</span>
        </li>,
        <OmitPage key={`omit ${Math.random()}`} onClick={handlePreOmitPageChange} />,
      ].concat(
        Array.from({ length: 9 - 2 }).map((_, index) => {
          const pageClasses = classNames('page', {
            // index + totalPagesCount - 9 + 3 实际应该是 index + 1 + totalPagesCount - 9 + 2
            // 一次只显示9个，此次遍历从第三个开始，遍历出的index需要+1，
            // totalPagesCount - 9就是省略掉的页码，再加上前面的两个，得实际页码
            active: activePage === index + totalPagesCount - 9 + 3,
            disabled: activePage === index + totalPagesCount - 9 + 3,
          });

          return (
            <li
              className={pageClasses}
              key={index + totalPagesCount - 9 + 3}
              onClick={(): void => {
                activePage !== index + totalPagesCount - 9 + 3 &&
                  onChange(index + totalPagesCount - 9 + 3);
              }}
            >
              <span>{index + totalPagesCount - 9 + 3}</span>
            </li>
          );
        }),
      );
      // 只显示右侧省略号的情况
    } else if (current - 4 <= 1) {
      const classes = classNames('page', {
        active: activePage === totalPagesCount,
        disabled: activePage === totalPagesCount,
      });

      contentList = Array.from({ length: 9 - 2 })
        .map((_, index) => {
          const pageClasses = classNames('page', {
            active: activePage === index + 1,
            disabled: activePage === index + 1,
          });

          return (
            <li
              className={pageClasses}
              key={index + 1}
              onClick={(): void => {
                activePage !== index + 1 && handlePageChange(index + 1);
              }}
            >
              <span>{index + 1}</span>
            </li>
          );
        })
        .concat(
          <OmitPage key={`omit ${Math.random()}`} onClick={handleNextOmitPageChange} />,
          <li
            className={classes}
            key={totalPagesCount}
            onClick={(): void => {
              activePage !== totalPagesCount && handlePageChange(totalPagesCount);
            }}
          >
            <span>{totalPagesCount}</span>
          </li>,
        );
      // 左右省略号都显示的情况
    } else {
      const classes = classNames('page', {
        active: activePage === 1,
        disabled: activePage === 1,
      });

      contentList = [
        <li
          className={classes}
          key={1}
          onClick={(): void => {
            activePage !== 1 && handlePageChange(1);
          }}
        >
          <span>1</span>
        </li>,
        <OmitPage key={`omit ${Math.random()}`} onClick={handlePreOmitPageChange} />,
      ].concat(
        Array.from({ length: 9 - 4 }).map((_, index) => {
          const pageClasses = classNames('page', {
            active: activePage === index + current - 2,
            disabled: activePage === index + current - 2,
          });

          return (
            <li
              className={pageClasses}
              key={index + current - 1}
              onClick={(): void => {
                activePage !== index + current - 2 && handlePageChange(index + current - 2);
              }}
            >
              <span>{index + current - 2}</span>
            </li>
          );
        }),
        <OmitPage key={`omit ${Math.random()}`} onClick={handleNextOmitPageChange} />,
        <li
          className={classes}
          key={totalPagesCount}
          onClick={(): void => {
            activePage !== totalPagesCount && handlePageChange(totalPagesCount);
          }}
        >
          <span>{totalPagesCount}</span>
        </li>,
      );
    }
    return contentList;
  };

  return (
    <div className={prefixCls}>
      <ul className="pages-inner">
        <li className={preBtnClasses} onClick={handlePrePageChange}>
          <span>{'<'}</span>
        </li>
        {/* 渲染分页 */}
        {renderPagination()}
        <li className={nextBtnClasses} onClick={handleNextPageChange}>
          <span>{'>'}</span>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
