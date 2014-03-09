


function dijkstra(graph,source,destination){

	this.distance=new Array();				
	this.distance[source.name]=0;
	this.pq=new MinPQ();
	var nodes=graph.getAllNodes();
	length=nodes.length;
	for(var i=0;i<length;i++){
		if(nodes[i]!=source){
			this.distance[nodes[i].name]=Number.POSITIVE_INFINITY;
		}
		pq.push(nodes[i],this.distance[nodes[i].name]);
	}
	
	while(pq.size()!=0){
		u=pq.pop();
		adjList=u.adjList;
		for (var i = 0; i < adjList.length; i++) {
			v=adjList[i];
			alt=this.distance[u.name]+u.weight[i];
			if(alt<this.distance[v.name]){
				this.distance[v.name]=alt;
				pq.remove(v);
				pq.push(v,this.distance[v.name]);
			}
		}
	}
	
	return this.distance[destination.name];
}