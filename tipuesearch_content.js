var tipuesearch = {"pages":[{"title":"GPS and Wellness Relationships for Soccer Team","text":"In this dashboard a team coach can have a view of the relationship between a select number of wellness variables and gps variables. The goal is to present the effect these variables have on each other. Using this historical data a team coach can view how an individual player deviates from his team or from his position. Allowing that coach to better modify a player's training plan to his level of recovery. For example, if the Soreness experienced for a player after X number of Accelerations is lower than his positions average, the coach can decide that this player generally recovers better, and could potentially be undertraining. This dashboard also allows the coach to understand which individuals cannot get away with less sleep than others as they experience higher RPE's, and could potentially be taxing the nervous system more.","tags":"Tableau","url":"https://clazaro97chosen.github.io/gps-and-welness-relationships-for-soccer-team","loc":"https://clazaro97chosen.github.io/gps-and-welness-relationships-for-soccer-team"},{"title":"Popular Activation Functions for Deep Learning - IN PROGRESS","text":"RELU, Sigmoid, and the Hyperbolic Tangent activation functions: Sigmoid functions : mostly used in in shallow networks , binary classification problems Main advantages of the sigmoid functions - Being easy to understand (probability) Sigmoid AF suffers major drawbacks which include sharp damp gradients during backpropagation from deeper hidden layers to the input layers, gradient saturation ( gradient/derivative value is very small. Consequently, after numerous iterations the weights get updated so slowly because the value of gradient is so much small), slow convergence and non-zero centred output thereby causing the gradient updates to propagate in different directions Tanh function : became the preferred function compared to the sigmoid function in that it gives better training performance for multi-layer neural networks by remedy of drawbacks from sigmoid AF. However, the tanh function could not solve the vanishing gradient problem suffered by the sigmoid functions as well. The main advantage provided by the function is that it produces zero centred output thereby aiding the back-propagation process. Finally the Rectified Linear Unit (ReLU) Function: It offers the better performance and generalization in deep learning compared to the Sigmoid and Tanh activation function. Advantages The ReLU represents a nearly linear function and therefore preserves the properties of linear models that made them easy to optimize, with the gradient-descent method. Eliminates the vanishing gradient problem by rectifying the values of the inputs less than zero and forcing them to zero. Guarantee faster computation since it does not compute exponentials and divisions, with overall speed of computation enhanced Limitations ReLU has alimitation that it easily overfits compared to the sigmoid function although the dropout technique has been adopted to reduce the effect of overfitting of ReLUs Sometimes fragile during training thereby causing some of the gradients to die. This leads to some neurons being dead as well, thereby causing the weight updates not to activate in future data points, thereby hindering learning as dead neurons gives zero activation. hink about the chain rule in the backward pass. If the derivative of the slope of the ReLU is of 0, absolutely no learning is performed on the layers below the dead ReLU, because 0 will be multiplied to the accumulated gradient for the weight update. Solution? To resolve the dead neuron issues, the leaky ReLU was proposed with a small negative slope to the ReLU to sustain and keep the weight updates alive during the entire propagation process. But, The LReLU has an identical result when compared to the standard ReLU. Perhaps because the ReLU can introduce a sort of \"optimal brain damage\" regularization in your machine learning algorithm thus avoiding overfitting and improving genrelaization. Activation Functions: Comparison of Trends in Practice and Research for Deep Learning[ https://arxiv.org/pdf/1811.03378.pdf ] https://www.quora.com/What-are-the-advantages-of-using-Leaky-Rectified-Linear-Units-Leaky-ReLU-over-normal-ReLU-in-deep-learning QUIZ QUIZ QUESTION 1: What are the advantages of the ReLU activation functions The ReLU represents a nearly linear function and therefore preserves the properties of linear models that made them easy to optimize, with the gradient-descent method. Eliminates the vanishing gradient problem by rectifying the values of the inputs less than zero and forcing them to zero. Guarantee faster computation since it does not compute exponentials and divisions, with overall speed of computation enhanced # Use an official Python runtime as an image FROM python:3.6 # The EXPOSE instruction indicates the ports on which a container # will listen for connections # Since Flask apps listen to port 5000 by default, we expose it EXPOSE 5000 ` def hello (): print ( \"hello world\" ) In [ ]:","tags":"Deep Learning","url":"https://clazaro97chosen.github.io/popular-activation-functions-for-deep-learning","loc":"https://clazaro97chosen.github.io/popular-activation-functions-for-deep-learning"}]};