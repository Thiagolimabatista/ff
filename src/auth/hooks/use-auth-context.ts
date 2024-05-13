


// ----------------------------------------------------------------------

export const useAuthContext = () => {
  const context = 'Thiago'

  if (!context) throw new Error('useAuthContext context must be use inside AuthProvider');

  return context;
};
