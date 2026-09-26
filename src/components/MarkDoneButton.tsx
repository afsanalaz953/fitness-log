'use client';

import { toast } from 'react-toastify';

type Props = {
  planId: number;
  isDone: boolean;
  onMarkDone: (id: number) => void;
};

const MarkAsDoneButton = ({ planId, isDone, onMarkDone }: Props) => {
  const handleClick = () => {
    if (isDone) return;

    onMarkDone(planId);

    toast.success('Workout marked as done ✅', {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isDone}
      aria-pressed={isDone}
      className="btn rounded-2xl bg-[#CCFF00] btn-sm text-black border-none font-semibold
                 transition-all duration-150
                 hover:bg-[#b8e600] hover:shadow-[0_0_0_3px_rgba(204,255,0,0.25)]
                 active:scale-[0.97]
                 disabled:bg-[#CCFF00]/30 disabled:text-black/40
                 disabled:cursor-not-allowed disabled:shadow-none"
    >
      {isDone ? '✅ Done' : '✔ Mark as Done'}
    </button>
  );
};

export default MarkAsDoneButton;


// 'use client';

// import { useState } from 'react';
// import { toast } from 'react-toastify';

// type Props = {
//   planId: number;
//   isDone: boolean;
//   onMarkDone: (id: number) => void;
// };

// const MarkAsDoneButton = ({ planId, isDone, onMarkDone }: Props) => {
//   const [loading, setLoading] = useState(false);

//   const handleClick = () => {
//     if (isDone || loading) return;

//     setLoading(true);
//     onMarkDone(planId);

//     toast.success('Workout marked as done ✅', {
//       position: 'top-right',
//       autoClose: 2000,
//     });

//     setLoading(false);
//   };

//   return (
//     <button
//       type="button"
//       onClick={handleClick}
//       disabled={isDone || loading}
//       aria-pressed={isDone}
//       className="btn rounded-2xl bg-[#CCFF00] btn-sm text-black border-none font-semibold
//                  transition-all duration-150
//                  hover:bg-[#b8e600] hover:shadow-[0_0_0_3px_rgba(204,255,0,0.25)]
//                  active:scale-[0.97]
//                  disabled:bg-[#CCFF00]/30 disabled:text-black/40
//                  disabled:cursor-not-allowed disabled:shadow-none"
//     >
//       {isDone ? '✅ Done' : '✔ Mark as Done'}
//     </button>
//   );
// };

// export default MarkAsDoneButton;