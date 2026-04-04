#include<iostream>
#include<bits/stdc++.h>
using namespace std;
void prims(vector<vector<pair<int,int>>>adj,int start)
{
   
}
int main()
{
    int vertic,edges;
    cin>>vertic>>edges;
    vector<vector<pair<int,int>>>adj(vertic);
    for(int i=0;i<edges;i++)
    {
        int u,v,w;
        cin>>u>>v>>w;
        adj[u].push_back({v,w});
        adj[v].push_back({u,w});
    }

}