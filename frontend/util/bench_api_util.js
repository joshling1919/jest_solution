export const fetchBenches = data => (
  $.ajax({
    method: 'GET',
    url: 'api/benches',
    data
  })
);

export const fetchBench = id => (
  $.ajax({
    method: 'GET',
    url: `api/benches/${id}`
  })
);

export const createReview = data => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data
  })
);

export const createBench = data => (
  $.ajax({
    method: 'POST',
    url: 'api/benches',
    data
  })
);
