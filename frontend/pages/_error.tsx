// productionのみ有効。開発時はNextのデフォルトcall stackが表示
// 参考
//nextjs.org/docs/pages/building-your-application/routing/custom-error#more-advanced-error-page-customizing:~:text=More%20Advanced%20Error%20Page%20Customizing

import type { ErrorProps } from 'next/error';

const CustomError = ({ statusCode }: ErrorProps) => {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  );
};

CustomError.getInitialProps = ({
  res,
  err,
}: {
  res: ErrorProps;
  err: ErrorProps;
}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomError;
