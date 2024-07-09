const handleError = (err: any, dispatch: any, title = "") => {
  const unsuccessfulOptions = {
    title: `${title}`,
    message: ``,
    position: "tr",
    autoDismiss: 1,
  };

  if (err.response) {
    if (err.response.status === 400) {
      unsuccessfulOptions.title = title ? title : "Please Try Again!";
      unsuccessfulOptions.message = err.response.data.error;
    } else if (err.response.status === 404) {
      unsuccessfulOptions.title =
        err.response.data.message ||
        "Your request could not be processed. Please try again.";
    } else if (err.response.status === 401) {
      unsuccessfulOptions.message = "Unauthorized Access! Please login again";
    } else if (err.response.status === 403) {
      unsuccessfulOptions.message =
        "Forbidden! You are not allowed to access this resource.";
    }
  } else if (err.message) {
    unsuccessfulOptions.message = err.message;
  } else {
    // fallback
    unsuccessfulOptions.message =
      "Your request could not be processed. Please try again.";
  }
};

export default handleError;
